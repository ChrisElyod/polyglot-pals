import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class LoginUserDto {
  @ApiProperty({
    example: 'test@test.com',
    description: "The user's email",
    format: 'string',
    minLength: (5),
    maxLength: (255) 
  })
  @IsEmail()
  @IsNotEmpty()
  @IsString()
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
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(255)
  readonly password: string;
}