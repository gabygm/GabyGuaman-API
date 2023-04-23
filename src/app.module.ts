import { Module } from '@nestjs/common';
import { RepositoryModule } from '../src/repository/repository.module';
import { OrganizationModule } from './organization/organization.module';

@Module({
  imports: [RepositoryModule, OrganizationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
