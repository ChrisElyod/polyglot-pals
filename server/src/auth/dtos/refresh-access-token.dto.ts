import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class RefreshAccessTokenDto {
  @ApiProperty({
    description: "Refresh token to be used for refreshing access tokens",
    format: 'uuid',
    uniqueItems: true
  })
  @IsNotEmpty()
  @IsString()
  readonly refreshToken: string;
}