import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

import * as bcrypt from 'bcrypt';

export type UserDocument = User & Document

@Schema()
export class User {
  @Prop({ required: true, default: Types.ObjectId })
  _id: Types.ObjectId;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: ['user'] })
  roles: Array<string>
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function(next) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    // tslint:disable-next-line:no-string-literal
    const hashed = await bcrypt.hash(this['password'], 10);
    // tslint:disable-next-line:no-string-literal
    this['password'] = hashed;
    return next();
  } catch (err) {
    return next(err);
  }
});