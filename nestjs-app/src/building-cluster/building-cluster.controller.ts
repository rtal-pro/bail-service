import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuildingClusterService } from './building-cluster.service';
import { Prisma } from '@prisma/client';

@Controller('building-cluster')
export class BuildingClusterController {
  constructor(private readonly buildingClusterService: BuildingClusterService) {}

  @Post()
  create(@Body() createBuildingClusterDto: Prisma.BuildingClusterCreateInput) {
    return this.buildingClusterService.create(createBuildingClusterDto);
  }

  @Get()
  findAll() {
    return this.buildingClusterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildingClusterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBuildingClusterDto: Prisma.BuildingClusterUpdateInput) {
    return this.buildingClusterService.update(+id, updateBuildingClusterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buildingClusterService.remove(+id);
  }
}
