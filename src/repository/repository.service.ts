import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { repositoriesDTOMock } from '../../tests/mocks';
import { mapToDTO } from '../../src/repository/dto/metrics-repository.dto';
import { TRIBU_MESSAGE_ERROR, TRIBY_WITHOUTH_COVERAGE } from 'src/utils/constants';

@Injectable()
export class RepositoryService {
  constructor(private prisma: PrismaService) {}

   getRepos(){
    const response = repositoriesDTOMock
    return response
  }

  async getReposMetrics(idtribu): Promise<any>{
    const tribu = await this.prisma.tribu.findUnique({
      where: {
        id: BigInt(idtribu)
      }
    })
    
    if(tribu){
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
      if(repositoryResponse.length ==0){
        return {
          message: TRIBY_WITHOUTH_COVERAGE
        }
      }
      return mapToDTO(repositoryResponse)

    }
    console.log("tribu", tribu)
    
    return {
      message: TRIBU_MESSAGE_ERROR
    }
  }
}