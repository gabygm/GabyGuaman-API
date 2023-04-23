import { Organization } from "@prisma/client";
import { IsNumber, IsOptional, IsString } from 'class-validator';


export class CreateOrganizationDto {
    @IsString()
    name: string
    @IsNumber()             
    status: number

    fromEnttity(orgnanization: Organization) {
        this.name = orgnanization.name, 
        this.status = orgnanization.status
      }
}

