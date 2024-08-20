import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Prisma } from '@prisma/client';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  create(@Body() createAdminDto: Prisma.AdminCreateInput) {
    return this.adminService.create(createAdminDto);
  }

  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @Get(':cuid')
  findOne(@Param('cuid') cuid: string) {
    return this.adminService.findOne(cuid);
  }

  @Patch(':cuid')
  update(@Param('cuid') cuid: string, @Body() updateAdminDto: Prisma.AdminUpdateInput) {
    return this.adminService.update(cuid, updateAdminDto);
  }

  @Delete(':cuid')
  remove(@Param('cuid') cuid: string) {
    return this.adminService.remove(cuid);
  }
}
