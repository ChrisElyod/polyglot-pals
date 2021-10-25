import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(
  ){}
  async use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...: ', req.method);
    console.log('Body...: ', req.body);
    console.log('Params...: ', req.params);
    console.log('Path...: ', req.path);
    console.log('Auth...: ', req.headers.authorization);
    next();
  }
}