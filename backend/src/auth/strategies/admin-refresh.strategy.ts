import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class AdminRefreshStrategy extends PassportStrategy(Strategy, 'admin-refresh') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.DOTENV_JWT_UR_ADMIN,
    });
  }

  async validate(payload: any) {
    return payload;
  }
}
