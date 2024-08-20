import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnterpriseService } from './enterprise.service';
import { Prisma } from '@prisma/client';


@Controller('enterprise')
export class EnterpriseController {
  constructor(private readonly enterpriseService: EnterpriseService) {}

  @Post()
  create(@Body() createEnterpriseDto: Prisma.EnterpriseCreateInput) {
    return this.enterpriseService.create(createEnterpriseDto);
  }

  @Get()
  findAll() {
    return this.enterpriseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enterpriseService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnterpriseDto: Prisma.EnterpriseUpdateInput) {
    return this.enterpriseService.update(id, updateEnterpriseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enterpriseService.remove(id);
  }
}
