import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
import { Model, Types } from 'mongoose';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';
import { UserProfileDocument } from './entities/user-profile.entity';

@Injectable()
export class UserProfilesService {
  constructor(
    @InjectModel('UserProfile') private readonly userProfileModel: Model<UserProfileDocument>
  ) {}
  findAll() {
    return `This action returns all userProfiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userProfile`;
  }

  async update(id: string, updateUserProfileDto: UpdateUserProfileDto, req: Request) {
    const userId = req.user;
    console.log(userId, 'userId');

    // if (userId !== id) {
    //   throw new BadRequestException('Could not update User Profile');
    // }

    return await this.userProfileModel.findOneAndUpdate(
      { userId: new Types.ObjectId(id) },
      { ...updateUserProfileDto, userId: new Types.ObjectId(id) },
      { upsert: true, new: true }
    )
  }

  remove(id: number) {
    return `This action removes a #${id} userProfile`;
  }
}
