import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dtos/login-user.dto';
import { RefreshAccessTokenDto } from './dtos/refresh-access-token.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  async login(@Req() req: Request, @Body() loginUserDto: LoginUserDto) {
    return await this.authService.login(req, loginUserDto);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  async logout(@Req() req: Request, @Body() refreshAccessToken: RefreshAccessTokenDto) {
    return await this.authService.logout(req, refreshAccessToken);
  }

  @Post('refresh-access-token')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  async refreshAccessToken(@Req() req: Request, @Body() refreshAccessToken: RefreshAccessTokenDto) {
    return await this.authService.refreshAccessToken(req, refreshAccessToken);
  }
}
