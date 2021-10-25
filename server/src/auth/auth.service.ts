import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { InjectModel } from '@nestjs/mongoose';
import { v4 } from 'uuid';

import * as bcrypt from 'bcrypt';

import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from './dtos/login-user.dto';
import { RefreshTokenDocument } from './entities/refresh-token.entity';
import { Model, Types } from 'mongoose';
import { RefreshAccessTokenDto } from './dtos/refresh-access-token.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    @InjectModel('RefreshToken') private readonly refreshToken: Model<RefreshTokenDocument>
  ) {}

  async login(req: Request, loginUserDto: LoginUserDto) {
    const user = await this.usersService.findOneByEmail(loginUserDto.email);
    await this.verifyPassword(loginUserDto.password, user.password);

    const payload = { email: user.email, sub: user._id }
    return {
      access_token: this.jwtService.sign(payload),
      refresh_token: await this.createRefreshToken(req, user._id),
      email: user.email,
    }
  }

  async logout(req: Request, refreshAccessToken: RefreshAccessTokenDto) {
    const userLogout = await this.refreshToken.findOneAndDelete({ refreshToken: refreshAccessToken.refreshToken });
    if (!userLogout) {
      throw new BadRequestException('User is already logged out.')
    }
    return;
  }

  private async verifyPassword(attemptedPassword: string, password: string) {
    const passMatch = await bcrypt.compare(attemptedPassword, password);

    if (!passMatch) throw new NotFoundException('Wrong email or password');
    return passMatch;
  }

  async validateUser(jwtPayload: JwtPayload): Promise<any> {
    const { email } = jwtPayload
    const user = await this.usersService.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException('User not found.');
    }
    return user;
  }

  async createRefreshToken(req: Request, userId: Types.ObjectId) {
    const refreshToken = new this.refreshToken({
      userId,
      refreshToken: v4(),
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
      browser: this.getBrowser(req),
      country: this.getCountry(req)
    })

    await refreshToken.save()
    return refreshToken.refreshToken;
  }

  async refreshAccessToken(req: Request, refreshAccessToken: RefreshAccessTokenDto) {
    const refreshToken = await this.refreshToken.findOne({ refreshToken: refreshAccessToken.refreshToken });

    if (!refreshToken) {
      throw new NotFoundException('User has been logged out. Please log in again.')
    }
    const user = await this.usersService.findOneById(refreshToken.userId.toString());

    return {
      access_token: this.jwtService.sign({ email: user.email, sub: user._id })
    };
  }

  private getBrowser(req: Request) {
    return req.header['user-agent'] || 'xx';
  }

  private getCountry(req: Request) {
    return req.headers['cf-ipcountry'] ? req.header['cf-ipcountry'] : 'xx';
  }

}
