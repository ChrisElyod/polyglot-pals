import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LfPenpalService } from './lf-penpal.service';
import { CreateLfPenpalDto } from './dto/create-lf-penpal.dto';
import { UpdateLfPenpalDto } from './dto/update-lf-penpal.dto';

@Controller('lf-penpal')
export class LfPenpalController {
  constructor(private readonly lfPenpalService: LfPenpalService) {}

  @Post()
  create(@Body() createLfPenpalDto: CreateLfPenpalDto) {
    return this.lfPenpalService.create(createLfPenpalDto);
  }

  @Get()
  findAll() {
    return this.lfPenpalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lfPenpalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLfPenpalDto: UpdateLfPenpalDto) {
    return this.lfPenpalService.update(+id, updateLfPenpalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lfPenpalService.remove(+id);
  }
}
