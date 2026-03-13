import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  validatePayload(payload: any) {
    if (!payload) throw new UnauthorizedException('invalid payload');
    return payload;
  }

  refreshUserTokens(uid: string) {
    return {
      _ut: jwt.sign({ _uid: uid }, process.env.DOTENV_JWT_UT as string, { algorithm: 'HS384', expiresIn: '5m' }),
      _ur: jwt.sign({ _uid: uid }, process.env.DOTENV_JWT_UR as string, { algorithm: 'HS384', expiresIn: '15d' }),
    };
  }

  refreshAdminTokens(uida: string) {
    return {
      _uta: jwt.sign({ _uida: uida }, process.env.DOTENV_JWT_UT_ADMIN as string, { algorithm: 'HS384', expiresIn: '3m' }),
      _ura: jwt.sign({ _uida: uida }, process.env.DOTENV_JWT_UR_ADMIN as string, { algorithm: 'HS384', expiresIn: '5d' }),
    };
  }
}
