import { Test, TestingModule } from '@nestjs/testing';
import { organizationDTOMock } from '../../mocks';
import { PrismaService } from '../../../src/prisma.service';
import { OrganizationController } from '../../../src/organization/organization.controller';
import { OrganizationService } from '../../../src/organization/organization.service';
import { CreateOrganizationDto } from '../../../src/organization/dto/create-organization.dto';
import { UpdateOrganizationDto } from '../../../src/organization/dto/update-organization.dto';


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

  describe('create organization controller cases', () => {
    it('should responseDTO object when the data sent is correct', async() => {
      const organizationDTO = new CreateOrganizationDto()
      organizationDTO.name = organizationDTOMock.name
      organizationDTO.status = organizationDTOMock.status
      prisma.organization.create = jest.fn().mockReturnValueOnce(organizationDTO)
      const responseDTO = await organizationService.create(organizationDTO)
      expect(responseDTO).toStrictEqual(organizationDTO);
    });

    it('should return error when data is missing', async() => {
      prisma.organization.create = jest.fn().mockReturnValueOnce("Missing data")
       try {
        await organizationService.create(null)
      } catch (error) {
        expect(error).toBeInstanceOf(TypeError)
      }
    });
  });

  describe('update organization controller cases', () => {
    it('should updateDTO object when the data sent is correct', async() => {
      const organizationDTO = new UpdateOrganizationDto()
      organizationDTO.name = organizationDTOMock.name
      organizationDTO.status = organizationDTOMock.status
      prisma.organization.update = jest.fn().mockReturnValueOnce(organizationDTO)
      const responseDTO = await organizationService.patch(1,organizationDTO)
      expect(responseDTO).toStrictEqual(organizationDTO);
    });

    it('should return error when id or dato to update organization is missing', async() => {
      prisma.organization.update = jest.fn().mockReturnValueOnce("Missing data")
      try {
        await organizationService.patch(null, null)
      } catch (error) {
        expect(error).toBeInstanceOf(TypeError)
      }

    });
  });
});