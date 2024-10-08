import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TaskService {

  constructor(private readonly databaseService: DatabaseService) {}

  async create(createTaskDto: Prisma.TaskCreateInput) {
    return this.databaseService.task.create({data: createTaskDto});
  }

  async findAll() {
    return this.databaseService.task.findMany();
  }

  async findOne(id: string) {
    return this.databaseService.task.findUnique({where: {id}});
  }

  async update(id: string, updateTaskDto: Prisma.TaskUpdateInput) {
    return this.databaseService.task.update({where: {id}, data: updateTaskDto});
  }

  async remove(id: string) {
    return this.databaseService.task.delete({where: {id}});
  }

  async createTask(createTaskDto: Prisma.TaskCreateWithoutSpotInput, spotId: string) {
    return this.databaseService.task.create({
      data: {
        ...createTaskDto,
        spot: {
          connect: { id: spotId },
        },
      },
    });
  }


}
