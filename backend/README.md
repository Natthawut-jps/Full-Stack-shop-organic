# API-ShopOrganic Backend (NestJS + TypeORM)

## Architecture

- `src/main.ts` boots the Nest application
- `src/app.module.ts` composes core modules
- `src/database/*` configures TypeORM connection via Nest DI
- `src/public-catalog/*` uses Nest `Controller + Service + Module` with TypeORM repositories
- `src/public-access/*` migrates public auth/contact/reset routes to Nest `Controller + Service + Module`
- `src/legacy-routing/*` mounts only remaining legacy Express routers via Nest middleware

## Setup

1. Install dependencies: `npm install`
2. Configure `.env.local` (JWT + DB settings)
3. Build: `npm run build`
4. Run dev: `npm run dev`
5. Run prod: `npm run start`

## Migrated endpoints (Nest + TypeORM)

- `GET /public/products/get_product`
- `GET /public/categories/get_category`
- `POST /public/register/username`
- `POST /public/register/google`
- `POST /public/reset_password/find_user`
- `POST /public/reset_password/send_email`
- `POST /public/contact/add`
- `GET /health`
