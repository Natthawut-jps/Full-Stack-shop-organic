import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './entities/admin.entity';
import { ContactEntity } from './entities/contact.entity';
import { UserEntity } from './entities/user.entity';
import { PublicAccessController } from './public-access.controller';
import { PublicAccessService } from './public-access.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, ContactEntity, AdminEntity])],
  controllers: [PublicAccessController],
  providers: [PublicAccessService],
})
export class PublicAccessModule {}
