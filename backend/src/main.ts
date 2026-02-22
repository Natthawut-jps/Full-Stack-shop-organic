import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createLegacyApp } = require('../app');

async function bootstrap() {
  const legacyExpressApp = createLegacyApp();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(legacyExpressApp));

  const port = Number(process.env.DOTENV_PORT || 3000);
  await app.listen(port);
  console.log(`NestJS server running on port ${port}`);
}

bootstrap();
