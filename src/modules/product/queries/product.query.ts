import { Injectable } from '@nestjs/common';
import { SQLHelper } from 'src/domain/helpers/sql.helper';
import { GetProductListParams } from '../domain/params/get-product-list.param';
import { GetProductParams } from '../domain/params/get-product.param';
import { UpdateProductParams } from '../domain/params/update-product.param';

@Injectable()
export class ProductQuery {
  getList({
    index,
    limit,
    isSaleOff,
    searchValue,
    categoryId,
    collectionId,
    sortCol,
    sortType,
  }: GetProductListParams) {
    const q = SQLHelper.select({
      table: 'products AS p',
      cols: [
        'p.*, COALESCE((p.price - p.salePrice) * 100 / p.price, 0) AS salePercent',
      ],
      joins: [
        {
          table: 'product_categories pc',
          type: 'LEFT JOIN',
          condition: 'p.id = pc.productId',
        },
        {
          table: 'product_collection pco',
          type: 'LEFT JOIN',
          condition: 'p.id = pco.productId',
        },
      ],
      where: {
        isSaleOff: {
          compare: '=',
          value: isSaleOff,
          logic: 'AND',
        },
        categoryId: {
          compare: '=',
          value: categoryId,
          logic: 'AND',
        },
        collectionId: {
          compare: '=',
          value: collectionId,
          logic: 'AND',
        },
        [searchValue ? 'name' : null]: {
          compare: 'LIKE',
          value: searchValue ? `"%${searchValue}%"` : null,
        },
      },
      sorts: [
        {
          col: sortCol,
          type: sortType,
        },
      ],
      limit: {
        index,
        limit,
      },
    });

    return q;
  }
  getListCount({
    isSaleOff,
    searchValue,
    categoryId,
    collectionId,
  }: GetProductListParams): string {
    const q = SQLHelper.select({
      table: 'products AS p',
      cols: ['COUNT(*) AS total'],
      joins: [
        {
          table: 'product_categories pc',
          type: 'LEFT JOIN',
          condition: 'p.id = pc.productId',
        },
        {
          table: 'product_collection pco',
          type: 'LEFT JOIN',
          condition: 'p.id = pco.productId',
        },
      ],
      where: {
        isSaleOff: {
          compare: '=',
          value: isSaleOff,
          logic: 'AND',
        },
        categoryId: {
          compare: '=',
          value: categoryId,
          logic: 'AND',
        },
        collectionId: {
          compare: '=',
          value: collectionId,
          logic: 'AND',
        },
        [searchValue ? 'name' : null]: {
          compare: 'LIKE',
          value: searchValue ? `"%${searchValue}%"` : null,
        },
      },
    });

    return q;
  }

  get({ slug }: GetProductParams) {
    const q = SQLHelper.select({
      table: 'products AS p',
      cols: ['p.*'],
      where: {
        slug: {
          compare: '=',
          value: `"${slug}"`,
        },
      },
    });

    return q;
  }

  batchUpdate(params: UpdateProductParams[]) {
    const q = SQLHelper.batchUpdate('products', params, 'id');

    return q;
  }
}
