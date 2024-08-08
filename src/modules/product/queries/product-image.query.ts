import { Injectable } from '@nestjs/common';
import { GetProductImagesParams } from '../domain/params/get-product-images.param';
import { SQLHelper } from 'src/domain/helpers/sql.helper';

@Injectable()
export class ProductImageQuery {
  getList({ productId }: GetProductImagesParams) {
    const q = SQLHelper.select({
      table: 'product_images AS p',
      cols: ['p.*'],
      where: {
        productId: {
          compare: '=',
          value: productId,
        },
      },
    });

    return q;
  }
}
