import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type RefreshTokenDocument = RefreshToken & Document

@Schema()
export class RefreshToken {
  @Prop({ required: true, ref: 'User' })
  userId: Types.ObjectId;

  @Prop({ required: true })
  refreshToken: string;

  @Prop({ required: true })
  ip: string;

  @Prop({ required: true })
  browser: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true, default: Date.now, expires: '3600s' })
  createdAt: Date
}

export const RefreshTokenSchema = SchemaFactory.createForClass(RefreshToken)