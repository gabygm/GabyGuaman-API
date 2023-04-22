import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { mapToResponse } from '../../src/repository/repository.mapper';

@Injectable()
export class RepositoryService {
  constructor(private prisma: PrismaService) {}

  async getRepos(){
    const response = await this.prisma.repository.findMany()
    return mapToResponse(response)
  }

}