import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { LegacyRoutingModule } from './legacy-routing/legacy-routing.module';

@Module({
  imports: [HealthModule, LegacyRoutingModule],
})
export class AppModule {}
