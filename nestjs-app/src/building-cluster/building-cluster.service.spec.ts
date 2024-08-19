import { Test, TestingModule } from '@nestjs/testing';
import { BuildingClusterService } from './building-cluster.service';

describe('BuildingClusterService', () => {
  let service: BuildingClusterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuildingClusterService],
    }).compile();

    service = module.get<BuildingClusterService>(BuildingClusterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
