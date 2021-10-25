import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'test@test.com',
    description: "The user's email",
    format: 'string',
    minLength: (5),
    maxLength: (255) 
  })
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(255)
  readonly email: string;

  @ApiProperty({
    example: 'test@test.com',
    description: "The user's email",
    format: 'string',
    minLength: (5),
    maxLength: (255) 
  })
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(255)
  readonly password: string;
}