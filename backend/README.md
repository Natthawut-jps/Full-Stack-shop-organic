# API-ShopOrganic Backend (NestJS + TypeORM)

## Architecture

- `src/main.ts` boots Nest app
- `src/auth/*` provides Nest JWT strategies + guards (replacing legacy passport-jwt usage)
- `src/database/*` configures TypeORM connection via DI
- `src/public-catalog/*` and `src/public-access/*` are Nest Controller/Service/Module domains with TypeORM entities
- `src/legacy-bridge/*` exposes remaining non-migrated routes via Nest controllers (`@All`) guarded by Nest JWT guards

## Setup

1. `npm install`
2. Configure `.env.local`
3. `npm run build`
4. `npm run dev`
5. `npm run start`

## Migrated endpoints

- `GET /public/products/get_product`
- `GET /public/categories/get_category`
- `POST /public/register/username`
- `POST /public/register/google`
- `POST /public/login/auth/username`
- `POST /public/admin_login/admin`
- `POST /public/reset_password/find_user`
- `POST /public/reset_password/send_email`
- `POST /public/contact/add`
- `GET /refresh/r_auth` (Nest guard + strategy)
- `GET /admin_authRefreshToken/refresh_token` (Nest guard + strategy)
