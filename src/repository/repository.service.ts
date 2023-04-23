import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { repositoriesDTOMock } from '../../tests/mocks';
import { mapToDTO } from '../../src/repository/dto/metrics-repository.dto';

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
          message: 'La Tribu no tiene repositorios que cumplan con la cobertura necesaria'
        }
      }
      return mapToDTO(repositoryResponse)

    }
    console.log("tribu", tribu)
    
    return {
      message: 'La Tribu no se encuentra registrada'
    }
  }
}