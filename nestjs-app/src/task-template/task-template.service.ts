import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TaskTemplateService {

  constructor(private readonly databaseService: DatabaseService) {}

  async create(createTaskDto: Prisma.TaskTemplateCreateInput) {
    return this.databaseService.taskTemplate.create({data: createTaskDto});
  }

  async findAll() {
    return this.databaseService.taskTemplate.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.taskTemplate.findUnique({where: {id}});
  }

  async update(id: number, updateTaskDto: Prisma.TaskTemplateUpdateInput) {
    return this.databaseService.taskTemplate.update({where: {id}, data: updateTaskDto});
  }

  async remove(id: number) {
    return this.databaseService.taskTemplate.delete({where: {id}});
  }
}
