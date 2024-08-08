import { Injectable } from '@nestjs/common';
import { SQLHelper } from 'src/domain/helpers/sql.helper';
import { GetProductPropertyParams } from '../domain/params/get-product-property.param';

@Injectable()
export class ProductPropertyQuery {
  get({ productId }: GetProductPropertyParams) {
    const q = SQLHelper.select({
      table: 'product_property_group AS ppg',
      cols: [
        'ppg.id',
        'ppg.totalSupply',
        'ppg.productId',
        'prop.id propertyId',
        'prop.name propertyName',
        'pi.propertyValueId',
        'pv.value propertyValue',
      ],
      joins: [
        {
          table: 'property_items pi',
          type: 'LEFT JOIN',
          condition: 'ppg.id = pi.propertyGroupId',
        },
        {
          table: 'property_values pv',
          type: 'LEFT JOIN',
          condition: 'pi.propertyValueId = pv.id',
        },
        {
          table: 'properties prop',
          type: 'LEFT JOIN',
          condition: 'pv.propertyId = prop.id',
        },
      ],
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
