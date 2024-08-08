import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/modules/user/repositories/user.repository';
import { LoginInput } from '../domain/inputs/login.input';
import { PASSWORD_HELPER } from 'src/domain/helpers/password.helper';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginUseCase {
  constructor(
    private readonly userRepo: UserRepository,
    private jwtService: JwtService,
  ) {}

  async execute(input: LoginInput) {
    try {
      const users = await this.userRepo.get({
        phoneNumber: input.phoneNumber,
      });
      const user = users[0];

      if (!user) {
        throw Error('Số điện thoại này chưa được đăng ký');
      }

      const isExact = await PASSWORD_HELPER.compare(
        input.password,
        user?.password,
      );
      if (isExact) {
        return {
          success: true,
          data: {
            accessToken: await this.jwtService.signAsync({
              id: user?.id,
              phoneNumber: user?.phoneNumber,
              fullName: user?.fullName,
            }),
          },
        };
      }

      throw Error('Số điện thoại hoặc mật khẩu không chính xác');
    } catch (err) {
      throw new HttpException(
        {
          success: false,
          data: err.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
