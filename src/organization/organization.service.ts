import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto, mapToListOrganizations } from './dto/create-organization.dto';
import { PrismaService } from '../prisma.service';
import { UpdateOrganizationDto } from './dto/update-organization.dto';


@Injectable()
export class OrganizationService {
  constructor(private prisma: PrismaService) {}


  async create(organizationDto: CreateOrganizationDto): Promise<CreateOrganizationDto> {
    const response = await this.prisma.organization.create({
      data: organizationDto})
    const responseDto = new CreateOrganizationDto()
    responseDto.fromEnttity(response)
    return responseDto
  }


  async patch(id, data: UpdateOrganizationDto): Promise<UpdateOrganizationDto> {
    const response = await this.prisma.organization.update({
      where: {
        id: BigInt(id) ,
      },
      data: {...data},
    })
    const responseDto = new UpdateOrganizationDto()
    responseDto.fromEnttity(response)
    return responseDto

  }

  async findAll(): Promise<CreateOrganizationDto[]>{
    const responses = await this.prisma.organization.findMany()
    return  mapToListOrganizations(responses)
  }

  async delete(id): Promise<{}> {
    const org = await this.prisma.organization.findUnique({
      where:{
        id: BigInt(id)
      },
    })
    if(org){
      const response = await this.prisma.organization.delete({
        where:{
          id: BigInt(id)
        },
      })
      return { 
        message: "Organization deleted successfully",
        name: response.name}
    }
    return null
  }

}
