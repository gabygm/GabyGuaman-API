import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Res } from '@nestjs/common';
import { RepositoryService } from '../../src/repository/repository.service';
import { ListMetricsRepositoryDto } from './dto/metrics-repository.dto';

@Controller()
export class RepositoryController {
  constructor(private readonly repositoryService: RepositoryService) {}

  @Get("repository/")
  getRepository() {
    return  this.repositoryService.getRepos()
  }
 
  @Get("repository/metrics/:idtribu")
  async getRepositoryMetrics(@Param('idtribu') id: number): Promise<ListMetricsRepositoryDto> {
    if(id == null || isNaN(id) ){
      throw new HttpException('Id is ivalid ', HttpStatus.BAD_REQUEST);
    }
    return await this.repositoryService.getReposMetrics(id)
  }
}
