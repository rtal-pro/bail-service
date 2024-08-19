import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpotService } from './spot.service';
import { Prisma } from '@prisma/client';

@Controller('spot')
export class SpotController {
  constructor(private readonly spotService: SpotService) {}

  @Post()
  create(@Body() createSpotDto: Prisma.SpotCreateInput) {
    return this.spotService.create(createSpotDto);
  }

  @Get()
  findAll() {
    return this.spotService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spotService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpotDto: Prisma.SpotUpdateInput) {
    return this.spotService.update(+id, updateSpotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spotService.remove(+id);
  }
}
