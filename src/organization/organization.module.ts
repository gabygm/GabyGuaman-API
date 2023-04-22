import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';
import { PrismaService } from '../../src/prisma.service';


@Module({
  controllers: [OrganizationController],
  providers: [OrganizationService, PrismaService]
})
export class OrganizationModule {}
