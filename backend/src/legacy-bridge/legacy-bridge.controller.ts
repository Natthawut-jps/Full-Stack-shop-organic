import { All, Controller, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AdminAccessGuard } from '../auth/guards/admin-access.guard';
import { ResetTokenGuard } from '../auth/guards/reset-token.guard';
import { UserAccessGuard } from '../auth/guards/user-access.guard';

// Temporary bridge for non-migrated routes. Each endpoint is exposed through Nest controllers.
@Controller()
export class LegacyBridgeController {
  @UseGuards(UserAccessGuard)
  @All('auth/:path(*)')
  authBridge(@Req() req: Request, @Res() res: Response) {
    const authRouter = require('../../router/auth/_auth');
    return authRouter(req, res, () => null);
  }

  @UseGuards(AdminAccessGuard)
  @All('admin/:path(*)')
  adminBridge(@Req() req: Request, @Res() res: Response) {
    const adminRouter = require('../../router/auth/admin/_auth_admin');
    return adminRouter(req, res, () => null);
  }

  @UseGuards(ResetTokenGuard)
  @All('reset_password/:path(*)')
  resetBridge(@Req() req: Request, @Res() res: Response) {
    const resetRouter = require('../../router/auth/password_reset');
    return resetRouter(req, res, () => null);
  }
}
