import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';

@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Post()
  create(@Body() createOrganizationDto: CreateOrganizationDto): Promise<CreateOrganizationDto>{
    if((createOrganizationDto.name || createOrganizationDto.status) == null){
      throw new HttpException('Data is missing', HttpStatus.BAD_REQUEST);
    }
    return this.organizationService.create(createOrganizationDto);
  }

}
