import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type LoggerDocument = Logger & Document

@Schema()
export class Logger {

  @Prop()
  requestMethod: string;

  @Prop()
  path: string;

  @Prop()
  auth: string;
}

export const LoggerSchema = SchemaFactory.createForClass(Logger);