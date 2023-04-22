import { Test, TestingModule } from '@nestjs/testing';
import { organizationDTOMock, repositoriesDTOMock } from '../../mocks';
import { PrismaService } from '../../../src/prisma.service';
import { OrganizationController } from '../../../src/organization/organization.controller';
import { OrganizationService } from '../../../src/organization/organization.service';
import { CreateOrganizationDto } from '../../../src/organization/dto/create-organization.dto';

describe('OrganizationController', () => {
  let organizationController: OrganizationController;
  let organizationService: OrganizationService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OrganizationController],
      providers: [OrganizationService, PrismaService],
    }).compile();

    organizationController = app.get<OrganizationController>(OrganizationController);
    organizationService = app.get<OrganizationService>(OrganizationService);
  });

  describe('organization controller cases', () => {
    it('should return an organization response when there is data', async() => {
      const organizationDTO = new CreateOrganizationDto()
      organizationDTO.id = organizationDTOMock.id
      organizationDTO.name = organizationDTOMock.name
      organizationDTO.status = organizationDTOMock.status

      jest.spyOn(organizationService, 'create').mockImplementation(async()=>organizationDTO )
      const response =await organizationController.create(organizationDTO)
      expect(response.id).toBe(organizationDTOMock.id);
      expect(response.name).toBe(organizationDTOMock.name);
      expect(response.status).toBe(organizationDTOMock.status);
    });
  });
});