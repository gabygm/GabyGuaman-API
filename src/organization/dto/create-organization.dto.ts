import { Organization } from "@prisma/client";

export class CreateOrganizationDto {
    id?: number
    name: string              
    status: number

    fromEnttity(orgnanization: Organization) {
        this.id = parseInt(orgnanization.id.toString()),
        this.name = orgnanization.name, 
        this.status = orgnanization.status
      }
}

