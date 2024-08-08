import { Injectable } from '@nestjs/common';
import { SQLHelper } from 'src/domain/helpers/sql.helper';
import { GetCollectionListParams } from '../domain/params/get-collection-list.param';

@Injectable()
export class CollectionQuery {
  getList({ index, limit, isActive }: GetCollectionListParams) {
    const q = SQLHelper.select({
      table: 'collection c',
      cols: ['*'],
      where: {
        isActive: {
          compare: '=',
          value: isActive,
        },
      },
      limit: {
        index,
        limit,
      },
    });

    return q;
  }
  getListCount({ isActive }: GetCollectionListParams): string {
    const q = SQLHelper.select({
      table: 'collection c',
      cols: ['COUNT(*) AS total'],
      where: {
        isActive: {
          compare: '=',
          value: isActive,
        },
      },
    });

    return q;
  }
}
