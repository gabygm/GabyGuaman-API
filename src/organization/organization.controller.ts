import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';

@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Post()
  create(
    @Body() createOrganizationDto: CreateOrganizationDto,
  ): Promise<CreateOrganizationDto> {
    if ((createOrganizationDto.name || createOrganizationDto.status) == null) {
      throw new HttpException('Data is missing', HttpStatus.BAD_REQUEST);
    }
    return this.organizationService.create(createOrganizationDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateOrganizationDto: UpdateOrganizationDto,
  ): Promise<UpdateOrganizationDto> {
    if ((id || updateOrganizationDto) == null || isNaN(id)) {
      throw new HttpException(
        'Id is ivalid or data is missing',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.organizationService.patch(id, updateOrganizationDto);
  }

  @Get()
  findAll() {
    return this.organizationService.findAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<{}> {
    if (id == null || isNaN(id)) {
      throw new HttpException('Id is ivalid ', HttpStatus.BAD_REQUEST);
    }
    const response = await this.organizationService.delete(id);
    if (response == null) {
      throw new HttpException(
        'Id organization is not in the DB ',
        HttpStatus.BAD_REQUEST,
      );
    }
    return response;
  }
}
