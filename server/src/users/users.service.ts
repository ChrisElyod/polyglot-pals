import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateUserDto } from './dtos/create-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>
  ) {}

  async register(createUserDto: CreateUserDto) {
    const user = new this.userModel(createUserDto);
    await this.isEmailUnique(user.email);

    await user.save();
    return user;
  }

  async findOneByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new BadRequestException('User could not be found');
    }
    return user;
  }

  async findOneById(userId: string): Promise<User> {
    const user = await this.userModel.findOne({ _id: new Types.ObjectId(userId) })

    console.log(user);

    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  private async isEmailUnique(email: string) {
    const user = await this.userModel.findOne({ email });
    if (user) {
      throw new ConflictException('Email already exists.')
    }
  }
}
