import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { organizationDTOMock } from '../mocks';
import { RepositoryService } from '../../src/repository/repository.service';
import { PrismaService } from '../../src/prisma.service';

describe('Organization (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [RepositoryService, PrismaService],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  test('/organization (POST) Should return 201 when receive data correct', () => {
    return request(app.getHttpServer())
      .post('/organization')
      .send(organizationDTOMock)
      .expect(HttpStatus.CREATED)
      .expect(organizationDTOMock);
  });

  test('/organization (POST) Should return error when data is missing', () => {
    organizationDTOMock.name = null
    return request(app.getHttpServer())
      .post('/organization')
      .set('Accept', 'application/json')
      .send({})
      .expect({"statusCode":HttpStatus.BAD_REQUEST,"message":"Data is missing"});
  });


  test('/organization (PATCH) Should return 200 when receive data correct', () => {
    organizationDTOMock.name = "Banco Y"
    return request(app.getHttpServer())
      .patch('/organization/1')
      .send(organizationDTOMock)
      .expect(HttpStatus.OK)
      .expect(organizationDTOMock);
  });

  test('/organization (PATCH) Should return error when data is missing', () => {
    organizationDTOMock.name = null
    return request(app.getHttpServer())
      .patch('/organization/test')
      .set('Accept', 'application/json')
      .send({})
      .expect({ statusCode: 400, message: 'Id is ivalid or data is missing' });
  });
});
