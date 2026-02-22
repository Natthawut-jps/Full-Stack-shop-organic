import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { LegacyBridgeController } from './legacy-bridge.controller';

@Module({
  imports: [AuthModule],
  controllers: [LegacyBridgeController],
})
export class LegacyBridgeModule {}
