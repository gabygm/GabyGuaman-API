import { Test, TestingModule } from '@nestjs/testing';
import { repositoriesDTOMock } from '../../mocks';
import { PrismaService } from '../../../src/prisma.service';
import { RepositoryController } from '../../../src/repository/repository.controller';
import { RepositoryService } from '../../../src/repository/repository.service';

describe('AppController', () => {
  let repositoryController: RepositoryController;
  let repositoryService: RepositoryService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RepositoryController],
      providers: [RepositoryService, PrismaService],
    }).compile();

    repositoryController = app.get<RepositoryController>(RepositoryController);
    repositoryService = app.get<RepositoryService>(RepositoryService);
  });

  describe('repository controller cases', () => {
    it('should return empty response when there is no data', async() => {
      const result =  {repositories: []}
      jest.spyOn(repositoryService, 'getRepos').mockImplementation(async()=>result )
      expect(await repositoryController.getRepository()).toBe(result);
    });
    it('should return array repositories response when there is no data', async() => {
      const result =  {repositories: [repositoriesDTOMock]}
      jest.spyOn(repositoryService, 'getRepos').mockImplementation(async()=>result )
      expect(await repositoryController.getRepository()).toBe(result);
    });
  });
});