import { Test, TestingModule } from '@nestjs/testing';
import { LfPenpalService } from './lf-penpal.service';

describe('LfPenpalService', () => {
  let service: LfPenpalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LfPenpalService],
    }).compile();

    service = module.get<LfPenpalService>(LfPenpalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
