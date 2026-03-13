import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class ResetStrategy extends PassportStrategy(Strategy, 'reset-token') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.DOTENV_JWT_RESET_PASSWORD,
    });
  }

  async validate(payload: any) {
    return payload;
  }
}
