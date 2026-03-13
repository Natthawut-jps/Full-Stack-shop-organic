import { join } from 'path';

let initialized = false;

export function initializeLegacyStack() {
  if (initialized) return;

  require('dotenv').config({ path: './.env.local' });

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
