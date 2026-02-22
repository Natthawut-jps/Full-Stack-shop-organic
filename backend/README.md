# API-ShopOrganic Backend (NestJS + TypeORM)

## Architecture

- `src/main.ts` boots the Nest application
- `src/app.module.ts` composes core modules
- `src/database/*` configures TypeORM connection via Nest DI
- `src/public-catalog/*` shows Nest `Controller + Service + Module` with TypeORM repositories
- `src/legacy-routing/*` mounts remaining legacy Express routers via Nest middleware for incremental migration

## Setup

1. Install dependencies: `npm install`
2. Configure `.env.local` (JWT + DB settings)
3. Build: `npm run build`
4. Run dev: `npm run dev`
5. Run prod: `npm run start`

## Migrated endpoints (Nest + TypeORM)

- `GET /public/products/get_product`
- `GET /public/categories/get_category`
- `GET /health`
