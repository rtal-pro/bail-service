import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AdminService {

  constructor(private readonly databaseService: DatabaseService) {}

  async create(createAdminDto: Prisma.AdminCreateInput) {
    return this.databaseService.admin.create({data: createAdminDto});
  }

  async findAll() {
    return this.databaseService.admin.findMany();
  }

  async findOne(id: string) {
    return this.databaseService.admin.findUnique({where: {id}});
  }

  async update(id: string, updateAdminDto: Prisma.AdminUpdateInput) {
    return this.databaseService.admin.update({where: {id}, data: updateAdminDto});
  }

  async remove(id: string) {
    return this.databaseService.admin.update({where: {id}, data: {deletedAt: new Date()}});
  }
}