import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EnterpriseService {

  constructor(private readonly databaseService: DatabaseService) {}

  async create(createEnterpriseDto: Prisma.EnterpriseCreateInput) {
    return this.databaseService.enterprise.create({data: createEnterpriseDto});
  }

  async findAll() {
    return this.databaseService.enterprise.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.enterprise.findUnique({where: {id}});
  }

  async update(id: number, updateEnterpriseDto: Prisma.EnterpriseUpdateInput) {
    return this.databaseService.enterprise.update({where: {id}, data: updateEnterpriseDto});
  }

  async remove(id: number) {
    return this.databaseService.enterprise.delete({where: {id}});
  }
}
