import {
  Body,
  Controller,
  Get,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthenticationGuard } from 'src/modules/auth/guards/auth.guard';
import { GetUserUseCase } from '../usecases/get-user.usecase';
import { GetUserInput } from '../domain/inputs/get-user.input';
import { UserGuard } from 'src/modules/auth/guards/user.guard';

@Controller('api/users')
export class UserController {
  constructor(private readonly getUserUseCase: GetUserUseCase) {}

  @UseGuards(AuthenticationGuard, UserGuard)
  @Get()
  async get(@Body() input: GetUserInput) {
    return await this.getUserUseCase.execute(input);
  }
}
