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

  async findOne(id: number) {
    return this.databaseService.buildingCluster.findUnique({where: {id}});
  }

  async update(id: number, updateBuildingClusterDto: Prisma.BuildingClusterUpdateInput) {
    return this.databaseService.buildingCluster.update({where: {id}, data: updateBuildingClusterDto});
  }

  async remove(id: number) {
    return this.databaseService.buildingCluster.delete({where: {id}});
  }
}
