import { Module } from '@nestjs/common';
import { LfPenpalService } from './lf-penpal.service';
import { LfPenpalController } from './lf-penpal.controller';

@Module({
  controllers: [LfPenpalController],
  providers: [LfPenpalService]
})
export class LfPenpalModule {}
