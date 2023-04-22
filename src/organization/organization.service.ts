import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { PrismaService } from '../prisma.service';


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
}
