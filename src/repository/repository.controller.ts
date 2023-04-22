import { Controller, Get } from '@nestjs/common';
import { RepositoryService } from '../../src/repository/repository.service';
import { mapToResponse } from '../../src/repository/repository.mapper';

@Controller()
export class RepositoryController {
  constructor(private readonly repositoryService: RepositoryService) {}

  @Get("repository")
  async getRepository() {
    return await this.repositoryService.getRepos()
    
  }
}
