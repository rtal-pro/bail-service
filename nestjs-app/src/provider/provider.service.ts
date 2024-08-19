import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProviderService {

  constructor(private readonly databaseService: DatabaseService) {}

  async create(createProviderDto: Prisma.ProviderCreateInput) {
    return this.databaseService.provider.create({data: createProviderDto});
  }

  async findAll() {
    return this.databaseService.provider.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.provider.findUnique({where: {id}});
  }

  async update(id: number, updateProviderDto: Prisma.ProviderUpdateInput) {
    return this.databaseService.provider.update({where: {id}, data: updateProviderDto});
  }

  async remove(id: number) {
    return this.databaseService.provider.delete({where: {id}});
  }
}
