import { Test, TestingModule } from '@nestjs/testing';
import { organizationDTOMock, repositoriesDTOMock } from '../../mocks';
import { PrismaService } from '../../../src/prisma.service';
import { OrganizationController } from '../../../src/organization/organization.controller';
import { OrganizationService } from '../../../src/organization/organization.service';
import { CreateOrganizationDto } from '../../../src/organization/dto/create-organization.dto';
import { Organization } from '@prisma/client';


describe('OrganizationController', () => {
  let organizationController: OrganizationController;
  let organizationService: OrganizationService;
  let prisma


  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OrganizationController],
      providers: [OrganizationService, PrismaService],
    }).compile();
    prisma = app.get<PrismaService>(PrismaService)
    organizationController = app.get<OrganizationController>(OrganizationController);
    organizationService = app.get<OrganizationService>(OrganizationService);
  });

  describe('organization controller cases', () => {
    it('should responseDTO object when the data sent is correct', async() => {
      const organizationDTO = new CreateOrganizationDto()
      organizationDTO.name = organizationDTOMock.name
      organizationDTO.status = organizationDTOMock.status
      prisma.organization.create = jest.fn().mockReturnValueOnce(organizationDTO)
      const responseDTO = await organizationService.create(organizationDTO)
      expect(responseDTO).toStrictEqual(organizationDTO);
    });

    it('should return undefined when data is missing', async() => {
      prisma.organization.create = jest.fn().mockReturnValueOnce("Missing data")
      const response = await organizationService.create(null)
      expect(response.name).toStrictEqual(undefined);
      expect(response.status).toStrictEqual(undefined);
    });
  });
});