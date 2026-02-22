import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import {
  AdminRefreshMiddleware,
  AdminRouterMiddleware,
  AuthRefreshMiddleware,
  AuthRouterMiddleware,
  PublicRouterMiddleware,
  ResetPasswordMiddleware,
} from './legacy.middleware';

@Module({})
export class LegacyRoutingModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PublicRouterMiddleware)
      .forRoutes(
        { path: 'public/register/(.*)', method: RequestMethod.ALL },
        { path: 'public/login/(.*)', method: RequestMethod.ALL },
        { path: 'public/admin_login/(.*)', method: RequestMethod.ALL },
        { path: 'public/reset_password/(.*)', method: RequestMethod.ALL },
        { path: 'public/contact/(.*)', method: RequestMethod.ALL },
      );

    consumer
      .apply(AuthRouterMiddleware)
      .forRoutes({ path: 'auth/(.*)', method: RequestMethod.ALL });

    consumer
      .apply(AdminRouterMiddleware)
      .forRoutes({ path: 'admin/(.*)', method: RequestMethod.ALL });

    consumer
      .apply(AuthRefreshMiddleware)
      .forRoutes({ path: 'refresh/r_auth', method: RequestMethod.ALL });

    consumer
      .apply(AdminRefreshMiddleware)
      .forRoutes({ path: 'admin_authRefreshToken/refresh_token', method: RequestMethod.ALL });

    consumer
      .apply(ResetPasswordMiddleware)
      .forRoutes({ path: 'reset_password/(.*)', method: RequestMethod.ALL });
  }
}
