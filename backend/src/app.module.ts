import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { HealthModule } from './health/health.module';
import { LegacyBridgeModule } from './legacy-bridge/legacy-bridge.module';
import { PublicAccessModule } from './public-access/public-access.module';
import { PublicCatalogModule } from './public-catalog/public-catalog.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    HealthModule,
    PublicCatalogModule,
    PublicAccessModule,
    LegacyBridgeModule,
  ],
})
export class AppModule {}
