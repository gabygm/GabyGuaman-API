import { Module } from '@nestjs/common';
import { PrismaService } from '../../src/prisma.service';
import { RepositoryController } from './repository.controller';
import { RepositoryService } from './repository.service';

@Module({
    controllers: [
        RepositoryController
    ],
    providers: [RepositoryService, PrismaService],
})
export class RepositoryModule {}
  