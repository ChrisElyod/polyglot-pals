import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { KnownLanguage } from '../entities/user-profile.entity';

export class UpdateUserProfileDto {
  @ApiProperty({

  })
  readonly country: string;

  @ApiProperty({

  })
  readonly knownLanguages: Array<KnownLanguage>;

  @ApiProperty({

  })
  readonly wantedLanguages: [string];
}
