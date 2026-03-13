import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AdminAccessStrategy } from './strategies/admin-access.strategy';
import { AdminRefreshStrategy } from './strategies/admin-refresh.strategy';
import { ResetStrategy } from './strategies/reset.strategy';
import { UserAccessStrategy } from './strategies/user-access.strategy';
import { UserRefreshStrategy } from './strategies/user-refresh.strategy';

@Module({
  imports: [PassportModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserAccessStrategy,
    AdminAccessStrategy,
    UserRefreshStrategy,
    AdminRefreshStrategy,
    ResetStrategy,
  ],
  exports: [AuthService, PassportModule],
})
export class AuthModule {}
