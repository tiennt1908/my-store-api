import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../entities/user.entity';
import { UserQuery } from './queries/user.query';
import { UserController } from './controllers/user.controller';
import { UserRepository } from './repositories/user.repository';
import { GetUserUseCase } from './usecases/get-user.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserQuery, UserRepository, GetUserUseCase],
  controllers: [UserController],
  exports: [UserQuery, UserRepository],
})
export class UserModule {}
