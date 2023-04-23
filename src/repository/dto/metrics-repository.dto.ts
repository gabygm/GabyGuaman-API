import { IsNumber, IsString } from 'class-validator';
import { getRepoVerificationState } from '../../../src/utils/repositoryVerificationState';


class MetricsRepositoryDto {
    @IsNumber()  
    id: bigint
    @IsString()
    name: string
    @IsString()
    tribe: string
    @IsString()
    organization: string
    @IsString()
    coverage: string
    @IsNumber()
    codeSmells: string
    @IsNumber()
    bugs: string
    @IsNumber()
    vulnerabilities: string
    @IsString()
    hotspots: string
    @IsString()
    verificationState: string
    @IsString()
    state: string
}

    
export const mapToDTO = async (repos) => {  
    let repositories: MetricsRepositoryDto[] = []
    for(let i=0; i < repos.length; i++){
        const repo = repos[i]
        const verificationState = await getRepoVerificationState(repo.id)           
        let metricsRepositoryDto: MetricsRepositoryDto = new MetricsRepositoryDto()
        metricsRepositoryDto.id =repo.id.toString()
        metricsRepositoryDto.name = repo.name
        metricsRepositoryDto.tribe = repo['tribu']?.name
        metricsRepositoryDto.organization = repo['tribu']?.organization.name
        metricsRepositoryDto.coverage = repo['metrics'][0]?.coverage
        metricsRepositoryDto.codeSmells = repo['metrics'][0]?.code_smells
        metricsRepositoryDto.bugs = repo['metrics'][0]?.bugs
        metricsRepositoryDto.vulnerabilities = repo['metrics'][0]?.vulnerabilities
        metricsRepositoryDto.hotspots = repo['metrics'][0]?.hotspot
        metricsRepositoryDto.verificationState = verificationState == 604 ? "Verificado":  verificationState == 605? "En espera": "Aprobado"
        metricsRepositoryDto.state = repo.state == 'E' ? "Enable" : repo.state == 'D'? "Disable": "Archived"
        repositories.push(metricsRepositoryDto)
    }
    return {repositories}
}
