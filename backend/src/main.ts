import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';
import { AppModule } from './app.module';
import { getLegacyPublicPath, initializeLegacyStack } from './legacy/legacy.setup';

async function bootstrap() {
  initializeLegacyStack();

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(json());
  app.use(urlencoded({ extended: false }));
  app.useStaticAssets(getLegacyPublicPath());

  const port = Number(process.env.DOTENV_PORT || 3001);
  await app.listen(port);
  console.log(`NestJS server running on port ${port}`);
}

bootstrap();
