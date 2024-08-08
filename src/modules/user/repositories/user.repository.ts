import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PagingParams } from 'src/domain/params/common/paging.params';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { UserEntity } from '../../../entities/user.entity';
import { PermissionOutput } from '../domain/outputs/permission.output';
import { CreateUserParams } from '../domain/params/create-user.params';
import { UpdateUserParams } from '../domain/params/update-user.params';
import { UserQuery } from '../queries/user.query';
import { GetUserParams } from '../domain/params/get-user.params';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    private readonly q: UserQuery,
  ) {}

  async create(params: CreateUserParams): Promise<InsertResult> {
    const q = this.q.create(params);

    return this.userRepo.query(q);
  }

  async update(params: UpdateUserParams): Promise<UpdateResult> {
    const q = this.q.update(params);

    return this.userRepo.query(q);
  }

  get(params: GetUserParams) {
    const q = this.q.get(params);

    return this.userRepo.query(q);
  }

  getList(params: PagingParams) {
    const q = this.q.getList(params);

    return this.userRepo.query(q);
  }

  async getListCount() {
    const total =
      ((await this.userRepo.query(this.q.getListCount()))?.[0]?.total || 0) * 1;

    return total;
  }
}
