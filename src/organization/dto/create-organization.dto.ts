import { Organization } from "@prisma/client";
import { IsNumber, IsOptional, IsString } from 'class-validator';


export class CreateOrganizationDto {
    @IsOptional()
    @IsNumber()  
    id: bigint
    @IsString()
    name: string
    @IsNumber()             
    status: number

    fromEnttity(orgnanization: Organization) {
        this.name = orgnanization.name, 
        this.status = orgnanization.status
    }
}

export function mapToListOrganizations (orgnanizations: Organization[]) {
  let response = []
  if(orgnanizations.length > 0){
    
    
    orgnanizations.forEach((org:any)=>{
      const organization = new CreateOrganizationDto()
      organization.id = org.id.toString()
      organization.name = org.name
      organization.status = org.status

      response.push(organization)
    })
  }
  return response
}
