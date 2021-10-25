import { PartialType } from '@nestjs/swagger';
import { CreateLfPenpalDto } from './create-lf-penpal.dto';

export class UpdateLfPenpalDto extends PartialType(CreateLfPenpalDto) {}
