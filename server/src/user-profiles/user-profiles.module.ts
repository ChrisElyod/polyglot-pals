import { Module } from '@nestjs/common';
import { UserProfilesService } from './user-profiles.service';
import { UserProfilesController } from './user-profiles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserProfileSchema } from './entities/user-profile.entity';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'UserProfile', schema: UserProfileSchema }]),
    UsersService
  ],
  controllers: [UserProfilesController],
  providers: [UserProfilesService],
  exports: [UserProfilesService]
})
export class UserProfilesModule {}
