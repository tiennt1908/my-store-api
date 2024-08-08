import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GetUserInput } from '../domain/inputs/get-user.input';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class GetUserUseCase {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(input: GetUserInput) {
    try {
      const [user] = await this.userRepo.get({ id: input.userId });

      if (!user) {
        throw Error('Không tìm thấy người dùng');
      }

      return {
        success: true,
        data: {
          id: user.id,
          fullName: user.fullName,
          phoneNumber: user.phoneNumber,
          roleId: user.roleId,
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
