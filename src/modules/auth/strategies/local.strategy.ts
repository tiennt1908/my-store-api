import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthenticationUseCase } from '../usecases/authentication.usecase';
import { UserEntity } from 'src/entities/user.entity';
import { Strategy } from 'passport-local';
import { RegisterInput } from '../domain/inputs/register.input';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authenticationUseCase: AuthenticationUseCase) {
    super({ usernameField: 'phoneNumber' });
  }

  async validate(input: RegisterInput): Promise<UserEntity> {
    const user = await this.authenticationUseCase.execute(
      input.phoneNumber,
      input.password,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
