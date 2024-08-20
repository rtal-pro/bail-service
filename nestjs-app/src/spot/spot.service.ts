import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class SpotService {

  constructor(private readonly databaseService: DatabaseService) {}

  async create(createSpotDto: Prisma.SpotCreateInput) {
    return this.databaseService.spot.create({data: createSpotDto});
  }

  async findAll() {
    return this.databaseService.spot.findMany();
  }

  async findOne(id: string) {
    return this.databaseService.spot.findUnique({where: {id}});
  }

  async update(id: string, updateSpotDto: Prisma.SpotUpdateInput) {
    return this.databaseService.spot.update({where: {id}, data: updateSpotDto});
  }

  async remove(id: string) {
    return this.databaseService.spot.delete({where: {id}});
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