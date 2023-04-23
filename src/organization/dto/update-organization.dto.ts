import { CreateOrganizationDto } from './create-organization.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Organization } from '@prisma/client';

export class UpdateOrganizationDto {
    @IsOptional()
    @IsString()
    name: string
    @IsOptional()
    @IsNumber()             
    status: number


    fromEnttity(orgnanization: Organization) {
        this.name = orgnanization.name, 
        this.status = orgnanization.status
      }
}
