import { Test, TestingModule } from '@nestjs/testing';
import { repositoriesDTOMock } from '../../mocks';
import { PrismaService } from '../../../src/prisma.service';
import { RepositoryController } from '../../../src/repository/repository.controller';
import { RepositoryService } from '../../../src/repository/repository.service';

describe('RepositoryController', () => {
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
    it('should return array repositories response when there is data', () => {
      expect(repositoryController.getRepository()).toBe(repositoriesDTOMock);
    });
  });
});