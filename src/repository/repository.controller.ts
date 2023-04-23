import { Controller, Get, Param, HttpException, HttpStatus, Header } from '@nestjs/common';
import { bodyReport, csvDataHeder } from '../utils/reportStructure';
import { RepositoryService } from '../../src/repository/repository.service';

@Controller()
export class RepositoryController {
  constructor(private readonly repositoryService: RepositoryService) {}

  @Get("repository/")
  getRepository() {
    return  this.repositoryService.getRepos()
  }
 
  @Get("repository/metrics/:idtribu")
  async getRepositoryMetrics(@Param('idtribu') id: number): Promise<any> {
    if(id == null || isNaN(id) ){
      throw new HttpException('Id is invalid ', HttpStatus.BAD_REQUEST);
    }
    return await this.repositoryService.getReposMetrics(id)
  }

  @Get("repository/report/:idtribu")
  @Header('content-type','text/csv')
  @Header('Content-Disposition','attachment; filename="reporte.csv')
  async reporRepositoryMetrics(@Param('idtribu') id: number): Promise<any> {
    if(id == null || isNaN(id) ){
      throw new HttpException('Id is invalid ', HttpStatus.BAD_REQUEST);
    }
    const repos = await this.repositoryService.getReposMetrics(id)
    return csvDataHeder +bodyReport(repos.repositories)
  
  }
}
