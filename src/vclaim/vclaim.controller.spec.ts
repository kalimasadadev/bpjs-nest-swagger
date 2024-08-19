import { Test, TestingModule } from '@nestjs/testing';
import { VclaimController } from './vclaim.controller';

describe('VclaimController', () => {
  let controller: VclaimController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VclaimController],
    }).compile();

    controller = module.get<VclaimController>(VclaimController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
