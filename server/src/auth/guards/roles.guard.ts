import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { UsersService } from "src/users/users.service";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly userService: UsersService
  ) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();

    const user = request.user;
    console.log(user);
    return true;
  }

  // handleRequest(err, user, info: Error, context: ExecutionContext) {
  //   if (!user) {
  //     throw new UnauthorizedException();
  //   }

  //   const roles = this.reflector.get<string[]>('roles', context.getHandler());
  //   console.log(roles)
  //   if (!roles) {
  //     return true;
  //   }

  //   const hasRole = () => user.roles.some((role) => roles.includes(role));
  //   if (!(user.roles && hasRole())) {
  //     throw new ForbiddenException('Forbidden.')
  //   }
  //   return user && user.roles && hasRole();
  // }
}