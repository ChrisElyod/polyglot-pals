import { Body, Controller, Get, Param, Post, Put, Req, Request, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Roles } from 'src/auth/auth-roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { diskStorage } from 'multer';
import { Types } from 'mongoose';
import { v4 } from 'uuid';
const path = require('path')
import { Observable, of } from 'rxjs';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

export const storage = {
  storage: diskStorage({
    destination: './uploads/profile-images',
    filename: (req, file, cb) => {
      const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + v4();
      const extension: string = path.parse(file.originalname).ext;

      cb(null, `${filename}${extension}`)
    }
  })
}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.register(createUserDto);
  }


  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get(':id')
  async getProfile(@Param('id') id: string) {
    const user = await this.usersService.findOneById(id);
    return { 
      email: user.email,
      roles: user.roles,
      userId: user._id
    }
  }

  @Post('upload/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user', 'admin')
  @UseInterceptors(FileInterceptor('file', storage))
  updateUserProfile(@UploadedFile() file, @Param('id') id: string): Observable<Object> {
    const user = this.usersService.findOneById(id);
    return of({
      imagePath: file.path,
    })
  }
}
