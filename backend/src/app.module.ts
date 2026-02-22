import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { HealthModule } from './health/health.module';
import { LegacyRoutingModule } from './legacy-routing/legacy-routing.module';
import { PublicAccessModule } from './public-access/public-access.module';
import { PublicCatalogModule } from './public-catalog/public-catalog.module';

@Module({
  imports: [
    DatabaseModule,
    HealthModule,
    PublicCatalogModule,
    PublicAccessModule,
    LegacyRoutingModule,
  ],
})
export class AppModule {}
