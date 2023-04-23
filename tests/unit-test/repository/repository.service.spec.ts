import { Test, TestingModule } from '@nestjs/testing';
import { metricsORMMock, metricsRepo, repositoriesDTOMock, repositoriesORMMock } from '../../mocks';
import { PrismaService } from '../../../src/prisma.service';
import { RepositoryService } from '../../../src/repository/repository.service';
import  '../../../src/repository/dto/metrics-repository.dto';
import * as Utils from '../../../src/utils/repositoryVerificationState';


describe('RepositoryService', () => {
  let prisma
  let repositoryService: RepositoryService;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [RepositoryService, PrismaService],
    }).compile();
    prisma = app.get<PrismaService>(PrismaService)
    repositoryService = app.get<RepositoryService>(RepositoryService);
  });

  describe('repository mapper cases', () => {
    it('should return an array of DTO responses given an array ORM model', () => {
      const responseDTO = repositoryService.getRepos()
      expect(responseDTO.repositories).toStrictEqual(repositoriesDTOMock.repositories);
    });
  });

  describe('repository metrics mapper cases', () => {
    it('should return error message given tribu id does not exist', async () => {
      prisma.tribu.findUnique = jest.fn().mockReturnValueOnce(null)
      prisma.repository.findMany = jest.fn().mockReturnValueOnce([])
      const responseDTO = await repositoryService.getReposMetrics(99999)
      expect(responseDTO).toStrictEqual({"message": "La Tribu no se encuentra registrada"});
    });

    it('should return a message coverages is less than 70% give repotories do not have data', async () => {
      prisma.tribu.findUnique = jest.fn().mockReturnValueOnce(2)
      prisma.repository.findMany = jest.fn().mockReturnValueOnce([])
      const responseDTO = await repositoryService.getReposMetrics(3)    
      expect(responseDTO).toStrictEqual({"message": "La Tribu no tiene repositorios que cumplan con la cobertura necesaria"});
    });

    it('test return a message coverages is less than 70% give repotories do not have data', async () => {
      prisma.tribu.findUnique = jest.fn().mockReturnValueOnce(2)
      prisma.repository.findMany = jest.fn().mockReturnValueOnce(metricsORMMock)
     
      jest.spyOn(Utils, 'getRepoVerificationState').mockImplementation(async()=> 604)

      const responseDTO = await repositoryService.getReposMetrics(2)    
      expect(responseDTO.repositories[0].id).toStrictEqual(metricsRepo.repositories[0].id);
      expect(responseDTO.repositories[0].name).toStrictEqual(metricsRepo.repositories[0].name);
      expect(responseDTO.repositories[0].tribe).toStrictEqual(metricsRepo.repositories[0].tribe);
      expect(responseDTO.repositories[0].organization).toStrictEqual(metricsRepo.repositories[0].organization);
      expect(responseDTO.repositories[0].coverage).toStrictEqual(metricsRepo.repositories[0].coverage);
      expect(responseDTO.repositories[0].codeSmells).toStrictEqual(metricsRepo.repositories[0].codeSmells);
    });
  });
});