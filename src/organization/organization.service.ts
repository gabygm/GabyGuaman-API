import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
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
        id: parseInt(id) ,
      },
      data: {...data},
    })
    const responseDto = new UpdateOrganizationDto()
    responseDto.fromEnttity(response)
    return responseDto

  }
}
