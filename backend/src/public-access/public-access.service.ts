import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import * as nodemailer from 'nodemailer';
import { Repository } from 'typeorm';
import { ContactEntity } from './entities/contact.entity';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class PublicAccessService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(ContactEntity)
    private readonly contactRepository: Repository<ContactEntity>,
  ) {}

  async registerWithUsername(payload: any) {
    const found = await this.userRepository.findOne({ where: { email: payload.email } });
    if (found) throw new UnauthorizedException(' already have the account !to Login');

    await this.userRepository.save(
      this.userRepository.create({
        first_name: payload.first_name,
        last_name: payload.last_name,
        email: payload.email,
        password: await bcrypt.hash(payload.password, 10),
        accept: payload.accept,
        imgURL: 'profile.jpg',
      }),
    );

    return 'successfully';
  }

  async registerWithGoogle(payload: any) {
    const found = await this.userRepository.findOne({ where: { email: payload.email } });
    if (!found) {
      await this.userRepository.save(
        this.userRepository.create({
          first_name: payload.first_name,
          last_name: payload.last_name,
          email: payload.email,
          password: await bcrypt.hash(payload.password, 10),
          accept: payload.accept,
          gmail: 1,
          imgURL: 'profile.jpg',
        }),
      );
    } else {
      const valid = await bcrypt.compare(payload.password, found.password);
      if (!valid) throw new UnauthorizedException('invalid google login');
    }

    return this.issueUserTokens(payload.email);
  }

  async findResetUser(email: string) {
    const user = await this.userRepository.findOne({ where: { email, gmail: 0 } });
    return user || 'not found user ';
  }

  async sendResetEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email, gmail: 0 } });
    if (!user) return 'user not found';

    const _re = jwt.sign({ _uid: user.email }, process.env.DOTENV_JWT_RESET_PASSWORD as string, {
      algorithm: 'HS384',
      expiresIn: '5m',
    });

    const url = `http://localhost:5173/password-reset/${_re.slice(0, 30)}`;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      auth: { user: 'user.natthawut@gmail.com', pass: 'mrhwhjvpluaolikg' },
    });

    await transporter.sendMail({
      from: 'natthawut.jps@gmail.com',
      to: user.email,
      subject: 'Reset-Password',
      text: url,
    });

    return { _re };
  }

  async addContact(payload: any) {
    await this.contactRepository.save(
      this.contactRepository.create({
        name: payload.name,
        email: payload.email,
        subject: payload.subject,
        description: payload.description,
      }),
    );

    return 'successfully';
  }

  private issueUserTokens(email: string) {
    const _ut = jwt.sign({ _uid: email }, process.env.DOTENV_JWT_UT as string, {
      algorithm: 'HS384',
      expiresIn: '5m',
    });

    const _ur = jwt.sign({ _uid: email }, process.env.DOTENV_JWT_UR as string, {
      algorithm: 'HS384',
      expiresIn: '15d',
    });

    return { _ut, _ur };
  }
}
