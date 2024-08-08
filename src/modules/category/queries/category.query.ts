import { Injectable } from '@nestjs/common';
import { SQLHelper } from 'src/domain/helpers/sql.helper';
import { GetCategoryListParams } from '../domain/params/category.param';

@Injectable()
export class CategoryQuery {
  getList({ index, limit, parentCategoryId }: GetCategoryListParams) {
    const q = SQLHelper.select({
      table: 'categories',
      cols: ['*'],
      where: {
        parentCategoryId: {
          compare: parentCategoryId === 0 ? 'IS' : '=',
          value: parentCategoryId === 0 ? 'NULL' : parentCategoryId,
        },
      },
      limit: {
        index,
        limit,
      },
    });

    return q;
  }
  getListCount({ parentCategoryId }: GetCategoryListParams): string {
    const q = SQLHelper.select({
      table: 'categories',
      cols: ['COUNT(*) as total'],
      where: {
        parentCategoryId: {
          compare: parentCategoryId === 0 ? 'IS' : '=',
          value: parentCategoryId === 0 ? 'NULL' : parentCategoryId,
        },
      },
    });

    return q;
  }
}
