import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { LfPenpalModule } from './lf-penpal/lf-penpal.module';
import { UserProfilesModule } from './user-profiles/user-profiles.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/polyglot-pen-pals'),
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({ isGlobal: true }),
    LfPenpalModule,
    UserProfilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
