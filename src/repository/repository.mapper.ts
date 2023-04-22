import { RepositoryDTO } from '../dto/repository.dto';
import { Repository } from '@prisma/client';

const toRepository = ( id: number) =>{
    const repository: RepositoryDTO  = {
        id: parseInt(id.toString()),
        state:id == 1 ? 604 : id == 2 ? 605 : 606

    }
    return repository
}

export const mapToResponse = (repos: Repository[])=>{
    let response = []
    repos.forEach((r:any)=>{
        response.push(toRepository(r.id))
    })
    return {repositories: response}
}



