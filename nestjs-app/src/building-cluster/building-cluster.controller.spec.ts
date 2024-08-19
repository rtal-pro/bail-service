import { Test, TestingModule } from '@nestjs/testing';
import { BuildingClusterController } from './building-cluster.controller';
import { BuildingClusterService } from './building-cluster.service';

describe('BuildingClusterController', () => {
  let controller: BuildingClusterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuildingClusterController],
      providers: [BuildingClusterService],
    }).compile();

    controller = module.get<BuildingClusterController>(BuildingClusterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
