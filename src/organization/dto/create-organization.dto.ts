import { Organization } from "@prisma/client";
import { IsNumber, IsOptional, IsString } from 'class-validator';


export class CreateOrganizationDto {
    @IsOptional()
    @IsNumber()  
    id: number
    @IsString()
    name: string
    @IsNumber()             
    status: number

    fromEnttity(orgnanization: Organization) {
        this.name = orgnanization.name, 
        this.status = orgnanization.status
      }
}

