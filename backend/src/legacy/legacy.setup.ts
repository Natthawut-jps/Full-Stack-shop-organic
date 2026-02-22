import { join } from 'path';

let initialized = false;

export function initializeLegacyStack() {
  if (initialized) return;

  require('dotenv').config({ path: './.env.local' });
  require('../../router/passport');

  require('../../model/Cart');
  require('../../model/Favorite');
  require('../../model/Order');
  require('../../model/Order_Detail');
  require('../../model/admin/Products');
  require('../../model/Shipping_address');
  require('../../model/Userinfo');
  require('../../model/Transaction');
  require('../../model/Contact');
  require('../../model/admin/Admin');
  require('../../model/admin/Categories');

  initialized = true;
}

export function getLegacyPublicPath() {
  return join(process.cwd(), 'public');
}

export function getLegacyRoutes() {
  initializeLegacyStack();

  return {
    passport: require('passport'),
    publicRouter: require('../../router/view/_public'),
    authRouter: require('../../router/auth/_auth'),
    adminRouter: require('../../router/auth/admin/_auth_admin'),
    resetPasswordRouter: require('../../router/auth/password_reset'),
  };
}
