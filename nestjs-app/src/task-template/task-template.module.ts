import { Module } from '@nestjs/common';
import { TaskTemplateService } from './task-template.service';
import { TaskTemplateController } from './task-template.controller';

@Module({
  controllers: [TaskTemplateController],
  providers: [TaskTemplateService],
})
export class TaskTemplateModule {}
