import { Test, TestingModule } from '@nestjs/testing';
import { VclaimService } from './vclaim.service';

describe('VclaimService', () => {
  let service: VclaimService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VclaimService],
    }).compile();

    service = module.get<VclaimService>(VclaimService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
