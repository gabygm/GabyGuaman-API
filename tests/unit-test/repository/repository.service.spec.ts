import { Test, TestingModule } from '@nestjs/testing';
import { repositoriesDTOMock, repositoriesORMMock } from '../../mocks';
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
    it('should return an empty response given an array ORM []', async () => {
      prisma.repository.findMany = jest.fn().mockReturnValueOnce([])
      const responseDTO = await repositoryService.getRepos()
      expect(responseDTO.repositories).toStrictEqual([]);
    });

    it('should return an array of DTO responses given an array ORM model', async () => {
      prisma.repository.findMany = jest.fn().mockReturnValueOnce(repositoriesORMMock)
      const responseDTO = await repositoryService.getRepos()
      expect(responseDTO.repositories).toStrictEqual(repositoriesDTOMock.repositories);
    });
  });
});