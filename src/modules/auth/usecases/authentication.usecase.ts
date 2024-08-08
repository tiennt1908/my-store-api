import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PASSWORD_HELPER } from 'src/domain/helpers/password.helper';
import { UserRepository } from 'src/modules/user/repositories/user.repository';

@Injectable()
export class AuthenticationUseCase {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(phoneNumber: string, password: string) {
    try {
      const users = await this.userRepo.get({
        phoneNumber: phoneNumber,
      });
      const user = users[0];

      if (!user) {
        throw Error('Incorrect number phone');
      }

      const check = await PASSWORD_HELPER.compare(password, user?.password);

      if (!check) {
        throw Error('Incorrect password');
      }

      return user;
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
