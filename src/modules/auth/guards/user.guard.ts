import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class UserGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    if (request.user && request.user.id) {
      request.body.userId = request.user.id;
      request.query.userId = request.user.id;
    }
    return true;
  }
}
