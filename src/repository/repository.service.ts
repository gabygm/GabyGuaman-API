import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ListMetricsRepositoryDto } from './dto/metrics-repository.dto';
import { repositoriesDTOMock } from '../../tests/mocks';

@Injectable()
export class RepositoryService {
  constructor(private prisma: PrismaService) {}

   getRepos(){
    const response = repositoriesDTOMock
    return response
  }

  async getReposMetrics(idtribu): Promise<ListMetricsRepositoryDto>{
    const repositoryResponse = await this.prisma.repository.findMany({
      where:{
        tribuId: BigInt(idtribu),
        state: 'E'
      },
      select:{
        id: true,
        name: true,
        state: true,
        tribu: {
          select: {
            name: true,
            organization: true
          }
        },
        metrics: {
          where: {
            coverage: {
              gte: 75
            },
          }
        }
      }
    })
   // console.log(repositoryResponse)
    //console.log(repositoryResponse[0])
    const listMetricsRepositoryDto = new ListMetricsRepositoryDto()
    listMetricsRepositoryDto.mapToDTO(repositoryResponse)
    return listMetricsRepositoryDto

  }

}