import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { repositoriesDTOMock } from '../mocks';
import { RepositoryService } from '../../src/repository/repository.service';
import { PrismaService } from '../../src/prisma.service';

describe('Repository (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [RepositoryService, PrismaService],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  test('/repository (GET) Should return 200 when there is data', () => {
    return request(app.getHttpServer())
      .get('/repository')
      .expect(HttpStatus.OK)
      .expect(repositoriesDTOMock);
  });
});
