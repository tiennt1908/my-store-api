import { Injectable } from '@nestjs/common';
import { SQLHelper } from '../../../domain/helpers/sql.helper';
import { PagingParams } from 'src/domain/params/common/paging.params';
import { UpdateUserParams } from '../domain/params/update-user.params';
import { GetUserParams } from '../domain/params/get-user.params';
import { CreateUserParams } from '../domain/params/create-user.params';

@Injectable()
export class UserQuery {
  create(params: CreateUserParams) {
    const q = SQLHelper.insert<CreateUserParams>('users', params);

    return q;
  }

  update(params: UpdateUserParams) {
    const q = SQLHelper.update('users', params, 'id');

    return q;
  }

  get({ id, phoneNumber }: GetUserParams): string {
    const q = SQLHelper.select({
      table: 'users',
      cols: ['*'],
      where: {
        id: {
          value: id,
          compare: '=',
          logic: 'OR',
        },
        phoneNumber: {
          value: phoneNumber,
          compare: '=',
        },
      },
    });

    return q;
  }

  getList(params: PagingParams): string {
    const q = SQLHelper.select({
      table: 'users',
      cols: ['*'],
      limit: params,
    });

    return q;
  }

  getListCount(): string {
    const q = SQLHelper.select({
      table: 'users',
      cols: ['COUNT(*) total'],
    });

    return q;
  }
}
