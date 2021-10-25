import { Injectable } from '@nestjs/common';
import { CreateLfPenpalDto } from './dto/create-lf-penpal.dto';
import { UpdateLfPenpalDto } from './dto/update-lf-penpal.dto';

@Injectable()
export class LfPenpalService {
  create(createLfPenpalDto: CreateLfPenpalDto) {
    return 'This action adds a new lfPenpal';
  }

  findAll() {
    return `This action returns all lfPenpal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lfPenpal`;
  }

  update(id: number, updateLfPenpalDto: UpdateLfPenpalDto) {
    return `This action updates a #${id} lfPenpal`;
  }

  remove(id: number) {
    return `This action removes a #${id} lfPenpal`;
  }
}
