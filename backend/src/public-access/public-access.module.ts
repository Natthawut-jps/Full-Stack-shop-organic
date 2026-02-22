import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactEntity } from './entities/contact.entity';
import { UserEntity } from './entities/user.entity';
import { PublicAccessController } from './public-access.controller';
import { PublicAccessService } from './public-access.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, ContactEntity])],
  controllers: [PublicAccessController],
  providers: [PublicAccessService],
})
export class PublicAccessModule {}
