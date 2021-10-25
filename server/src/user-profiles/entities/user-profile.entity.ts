import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type UserProfileDocument = UserProfile & Document

export enum LanguageLevel {
  NATIVE = 'native',
  FLUENT = 'fluent',
  INTERMEDIATE = 'intermediate',
  BEGINNER = 'beginner'
}

export type KnownLanguage = {
  language: string;

  // One of LanguageLevel enum (how do?)
  level: string;
}

@Schema()
export class UserProfile {
  @Prop()
  country: string;

  @Prop()
  knownLanguages: Array<KnownLanguage>;

  @Prop()
  wantedLanguages: [string];

  @Prop({ ref: 'User', required: true })
  userId: Types.ObjectId;
}

export const UserProfileSchema = SchemaFactory.createForClass(UserProfile);
