# API-ShopOrganic Backend (NestJS structure)

## Architecture

- `src/main.ts` boots NestJS app
- `src/app.module.ts` is the root module
- `src/health/*` contains a Nest controller/module example (`GET /health`)
- `src/legacy-routing/*` mounts existing Express routers through Nest middleware for incremental migration
- `src/legacy/*` initializes legacy models/passport and shared legacy setup

## Setup

1. Install dependencies: `npm install`
2. Configure `.env.local`
3. Build: `npm run build`
4. Run development: `npm run dev`
5. Run production: `npm run start`
