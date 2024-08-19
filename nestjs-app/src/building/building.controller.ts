import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuildingService } from './building.service';
import { Prisma } from '@prisma/client';

@Controller('building')
export class BuildingController {
  constructor(private readonly buildingService: BuildingService) { }

  @Post()
  create(@Body() createBuildingDto: Prisma.BuildingCreateInput) {
    return this.buildingService.create(createBuildingDto);
  }

  @Get()
  findAll() {
    return this.buildingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBuildingDto: Prisma.BuildingUpdateInput) {
    return this.buildingService.update(+id, updateBuildingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buildingService.remove(+id);
  }

  @Post(':id/spots')
  async addSpot(
    @Param('id') buildingId: number,
    @Body() createSpotDto: Prisma.SpotCreateWithoutBuildingInput
  ) {
    return this.buildingService.addSpotToBuilding(buildingId, createSpotDto);
  }
}
