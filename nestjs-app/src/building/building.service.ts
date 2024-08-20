import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class BuildingService {

  constructor(private readonly databaseService: DatabaseService) {}

  async create(createBuildingDto: Prisma.BuildingCreateInput) {
    return this.databaseService.building.create({data: createBuildingDto});
  }

  async findAll() {
    return this.databaseService.building.findMany();
  }

  async findOne(id: string) {
    return this.databaseService.building.findUnique({where: {id}});
  }

  async update(id: string, updateBuildingDto: Prisma.BuildingUpdateInput) {
    return this.databaseService.building.update({where: {id}, data: updateBuildingDto});
  }

  async remove(id: string) {
    return this.databaseService.building.delete({where: {id}});
  }

  async addSpotToBuilding(buildingId: string, createSpotDto: Prisma.SpotCreateWithoutBuildingInput) {
    return this.databaseService.spot.create({
      data: {
        ...createSpotDto,
        building: {
          connect: { id: buildingId }
        }
      }
    });
  }
}