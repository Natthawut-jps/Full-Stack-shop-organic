import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { getLegacyRoutes } from '../legacy/legacy.setup';

@Injectable()
export class PublicRouterMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { publicRouter } = getLegacyRoutes();
    return publicRouter(req, res, next);
  }
}

@Injectable()
export class AuthRouterMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { passport, authRouter } = getLegacyRoutes();
    passport.authenticate('auth_usp', { session: false })(req, res, () =>
      authRouter(req, res, next),
    );
  }
}

@Injectable()
export class AdminRouterMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { passport, adminRouter } = getLegacyRoutes();
    passport.authenticate('admin_auth_usp', { session: false })(req, res, () =>
      adminRouter(req, res, next),
    );
  }
}

@Injectable()
export class AuthRefreshMiddleware implements NestMiddleware {
  use(req: Request, res: Response) {
    const { passport } = getLegacyRoutes();
    passport.authenticate('authorized', { session: false })(req, res, () => {
      res.status(200).json((req as any).user);
    });
  }
}

@Injectable()
export class AdminRefreshMiddleware implements NestMiddleware {
  use(req: Request, res: Response) {
    const { passport } = getLegacyRoutes();
    passport.authenticate('admin_authorized', { session: false })(req, res, () => {
      res.status(200).json((req as any).user);
    });
  }
}

@Injectable()
export class ResetPasswordMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { passport, resetPasswordRouter } = getLegacyRoutes();
    passport.authenticate('reset_password_new', { session: false })(
      req,
      res,
      () => resetPasswordRouter(req, res, next),
    );
  }
}
