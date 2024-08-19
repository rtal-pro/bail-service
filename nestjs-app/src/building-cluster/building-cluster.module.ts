import { Module } from '@nestjs/common';
import { BuildingClusterService } from './building-cluster.service';
import { BuildingClusterController } from './building-cluster.controller';

@Module({
  controllers: [BuildingClusterController],
  providers: [BuildingClusterService],
})
export class BuildingClusterModule {}
