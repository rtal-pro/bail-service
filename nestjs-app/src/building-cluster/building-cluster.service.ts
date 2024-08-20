import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class BuildingClusterService {

  constructor(private readonly databaseService: DatabaseService) {}

  async create(createBuildingClusterDto: Prisma.BuildingClusterCreateInput) {
    return this.databaseService.buildingCluster.create({data: createBuildingClusterDto});
  }

  async findAll() {
    return this.databaseService.buildingCluster.findMany();
  }

  async findOne(id: string) {
    return this.databaseService.buildingCluster.findUnique({where: {id}});
  }

  async update(id: string, updateBuildingClusterDto: Prisma.BuildingClusterUpdateInput) {
    return this.databaseService.buildingCluster.update({where: {id}, data: updateBuildingClusterDto});
  }

  async remove(id: string) {
    return this.databaseService.buildingCluster.delete({where: {id}});
  }

  async addBuildingToCluster(clusterId: string, buildingId: string) {
    return this.databaseService.building.update({
      where: { id: buildingId },
      data: {
        buildingCluster: {
          connect: { id: clusterId },
        },
      },
    });
  }
}
