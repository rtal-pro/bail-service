import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskTemplateService } from './task-template.service';
import { Prisma } from '@prisma/client';

@Controller('task-template')
export class TaskTemplateController {
  constructor(private readonly taskTemplateService: TaskTemplateService) {}

  @Post()
  create(@Body() createTaskTemplateDto: Prisma.TaskTemplateCreateInput) {
    return this.taskTemplateService.create(createTaskTemplateDto);
  }

  @Get()
  findAll() {
    return this.taskTemplateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskTemplateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskTemplateDto: Prisma.TaskTemplateUpdateInput) {
    return this.taskTemplateService.update(+id, updateTaskTemplateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskTemplateService.remove(+id);
  }
}
