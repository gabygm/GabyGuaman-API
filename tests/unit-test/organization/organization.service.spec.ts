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

  describe('create organization service cases', () => {
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

  describe('update organization service cases', () => {
    it('should return updateDTO object when the data sent is correct', async() => {
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

  describe('get organizations service cases', () => {
    it('should return a list of updateDTOs objects when there is data', async() => {
      const organizationDTO = new CreateOrganizationDto()
      organizationDTO.id = BigInt(1) 
      organizationDTO.name = organizationDTOMock.name
      organizationDTO.status = organizationDTOMock.status
      prisma.organization.findMany = jest.fn().mockReturnValueOnce([organizationDTO])
      const responseDTO = await organizationService.findAll()
      expect(responseDTO.length).toBeGreaterThan(0)
      expect(responseDTO[0].name).toStrictEqual(organizationDTO.name)
    });

    it('should return a empty list when there is no data', async() => {
      prisma.organization.findMany = jest.fn().mockReturnValueOnce([])
      const responseDTO = await organizationService.findAll()
      expect(responseDTO).toStrictEqual([]);

    });
  });

  describe('delete organizations service cases', () => {
    it('should return a message when organization was delete succesfully', async() => {
      const organizationDTO = new CreateOrganizationDto()
      organizationDTO.id = BigInt(1) 
      organizationDTO.name = organizationDTOMock.name
      organizationDTO.status = organizationDTOMock.status
      prisma.organization.create = jest.fn().mockReturnValueOnce([organizationDTO])
      const message_response = { 
        message: "Organization deleted successfully",
        name: organizationDTO.name}
      prisma.organization.delete = jest.fn().mockReturnValueOnce(message_response)
      const responseDTO = await organizationService.delete(organizationDTO.id)
      expect(responseDTO).toStrictEqual(message_response)
    });

    it('should return a null when can not delete the organization', async() => {
      prisma.organization.delete = jest.fn().mockReturnValueOnce(null)
      const responseDTO = await organizationService.delete(1111)
      expect(responseDTO).toStrictEqual(null);

    });
  });
});