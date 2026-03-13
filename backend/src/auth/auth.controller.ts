import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminRefreshGuard } from './guards/admin-refresh.guard';
import { UserRefreshGuard } from './guards/user-refresh.guard';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(UserRefreshGuard)
  @Get('refresh/r_auth')
  refreshUser(@Req() req: any) {
    return this.authService.refreshUserTokens(req.user._uid);
  }

  @UseGuards(AdminRefreshGuard)
  @Get('admin_authRefreshToken/refresh_token')
  refreshAdmin(@Req() req: any) {
    return this.authService.refreshAdminTokens(req.user._uida);
  }
}
