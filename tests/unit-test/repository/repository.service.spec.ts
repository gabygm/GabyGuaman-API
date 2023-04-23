import { Test, TestingModule } from '@nestjs/testing';
import { metricsORMMock, metricsRepo, repositoriesDTOMock, repositoriesORMMock } from '../../mocks';
import { PrismaService } from '../../../src/prisma.service';
import { RepositoryService } from '../../../src/repository/repository.service';


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
    it('should return an empty response given an array ORM empty', async () => {
      prisma.repository.findMany = jest.fn().mockReturnValueOnce([])
      const responseDTO = await repositoryService.getReposMetrics(99999)
      expect(responseDTO.repositories).toStrictEqual([]);
    });

    it('should return an array of DTO responses metrics given an array ORM model', async () => {
      prisma.repository.findMany = jest.fn().mockReturnValueOnce(metricsORMMock)
      const responseDTO = await repositoryService.getReposMetrics(3)    
      expect(responseDTO.repositories[0].name).toStrictEqual(metricsRepo.repositories[0].name);
      expect(responseDTO.repositories[0].tribe).toStrictEqual(metricsRepo.repositories[0].tribe);
    });
  });
});