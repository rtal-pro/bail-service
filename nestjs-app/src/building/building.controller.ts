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

  @Get(':cuid')
  findOne(@Param('cuid') cuid: string) {
    return this.buildingService.findOne(cuid);
  }

  @Patch(':cuid')
  update(@Param('cuid') cuid: string, @Body() updateBuildingDto: Prisma.BuildingUpdateInput) {
    return this.buildingService.update(cuid, updateBuildingDto);
  }

  @Delete(':cuid')
  remove(@Param('cuid') cuid: string) {
    return this.buildingService.remove(cuid);
  }

  @Post(':cuid/spots')
  async addSpot(
    @Param('cuid') buildingId: string,
    @Body() createSpotDto: Prisma.SpotCreateWithoutBuildingInput
  ) {
    return this.buildingService.addSpotToBuilding(buildingId, createSpotDto);
  }
}
