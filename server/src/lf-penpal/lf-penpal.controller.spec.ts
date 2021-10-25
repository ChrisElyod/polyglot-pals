import { Test, TestingModule } from '@nestjs/testing';
import { LfPenpalController } from './lf-penpal.controller';
import { LfPenpalService } from './lf-penpal.service';

describe('LfPenpalController', () => {
  let controller: LfPenpalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LfPenpalController],
      providers: [LfPenpalService],
    }).compile();

    controller = module.get<LfPenpalController>(LfPenpalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
