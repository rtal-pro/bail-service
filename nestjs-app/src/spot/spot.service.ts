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

  async findOne(id: number) {
    return this.databaseService.spot.findUnique({where: {id}});
  }

  async update(id: number, updateSpotDto: Prisma.SpotUpdateInput) {
    return this.databaseService.spot.update({where: {id}, data: updateSpotDto});
  }

  async remove(id: number) {
    return this.databaseService.spot.delete({where: {id}});
  }
}