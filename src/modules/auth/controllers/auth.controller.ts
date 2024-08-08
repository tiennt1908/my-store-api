import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { RegisterInput } from '../domain/inputs/register.input';
import { RegisterUseCase } from '../usecases/register.usecase';
import { LoginInput } from '../domain/inputs/login.input';
import { LocalAuthGuard } from '../guards/local.guard';
import { LoginUseCase } from '../usecases/login.usecase';

@Controller('api/auth')
export class AuthController {
  constructor(
    private readonly registerUseCase: RegisterUseCase,
    private readonly loginUseCase: LoginUseCase,
  ) {}

  @Post('/register')
  async register(@Body() input: RegisterInput) {
    return await this.registerUseCase.execute(input);
  }

  @Post('/login')
  async login(@Body() input: LoginInput) {
    return await this.loginUseCase.execute(input);
  }
}
