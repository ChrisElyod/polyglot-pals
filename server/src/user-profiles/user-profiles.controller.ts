import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, Req } from '@nestjs/common';
import { UserProfilesService } from './user-profiles.service';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/auth-roles.decorator';
import { Request } from 'express';

@Controller('user-profiles')
export class UserProfilesController {
  constructor(private readonly userProfilesService: UserProfilesService) {}

  @Get()
  findAll() {
    return this.userProfilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userProfilesService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user', 'admin')
  @Put(':id')
  async update(@Req() req: Request, @Param('id') id: string, @Body() updateUserProfileDto: UpdateUserProfileDto) {
    return await this.userProfilesService.update(id, updateUserProfileDto, req);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userProfilesService.remove(+id);
  }
}
