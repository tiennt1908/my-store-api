import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserInput } from 'src/modules/user/domain/inputs/create-user.input';
import { UserRepository } from 'src/modules/user/repositories/user.repository';
import { RegisterInput } from '../domain/inputs/register.input';
import { PASSWORD_HELPER } from 'src/domain/helpers/password.helper';

@Injectable()
export class RegisterUseCase {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(input: RegisterInput) {
    try {
      const users = await this.userRepo.get({
        phoneNumber: input.phoneNumber,
      });

      if (users?.length > 0) {
        throw new Error('Số điện thoại đã được sử dụng');
      }

      const createUserQuery = await this.userRepo.create({
        fullName: input.fullName,
        phoneNumber: input.phoneNumber,
        password: await PASSWORD_HELPER.hash(input.password),
        roleId: 1,
      });

      return {
        success: true,
        data: {
          fullName: input.fullName,
          phoneNumber: input.phoneNumber,
          roleId: 1,
        },
      };
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
