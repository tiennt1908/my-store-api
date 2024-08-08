import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthController } from './controllers/auth.controller';
import { RegisterUseCase } from './usecases/register.usecase';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './domain/constants/jwt.constants';
import { LoginUseCase } from './usecases/login.usecase';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthenticationUseCase } from './usecases/authentication.usecase';
import { JsonWebTokenStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [
    RegisterUseCase,
    LoginUseCase,
    AuthenticationUseCase,
    LocalStrategy,
    JsonWebTokenStrategy,
  ],
  controllers: [AuthController],
  exports: [],
})
export class AuthModule {}
