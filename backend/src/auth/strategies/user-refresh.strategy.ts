import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class UserRefreshStrategy extends PassportStrategy(Strategy, 'user-refresh') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.DOTENV_JWT_UR,
    });
  }

  async validate(payload: any) {
    return payload;
  }
}
