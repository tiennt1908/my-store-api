import { Injectable } from '@nestjs/common';
import { SQLHelper } from 'src/domain/helpers/sql.helper';
import { UpdateProductPropertyGroupParams } from '../domain/params/update-product-property-group.param';

@Injectable()
export class ProductPropertyGroupQuery {
  getProductPropertyGroupByIds(ids: number[] | string[]) {
    const q = SQLHelper.select({
      table: 'product_property_group ppg',
      cols: ['p.price', 'p.salePrice', 'p.isSaleOff', 'ppg.*'],
      joins: [
        {
          table: 'products p',
          type: 'INNER JOIN',
          condition: 'productId = p.id',
        },
      ],
      where: {
        ['ppg.id']: {
          compare: 'IN',
          value: `(${ids.toString()})`,
        },
      },
    });

    return q;
  }

  batchUpdate(params: UpdateProductPropertyGroupParams[]) {
    const q = SQLHelper.batchUpdate('product_property_group', params, 'id');

    return q;
  }

  getProductCartByPropertyGroupIds(ids: number[] | string[]) {
    const q = SQLHelper.select({
      table: 'product_property_group ppg',
      cols: [
        'ppg.*',
        'p.name',
        'p.slug',
        'p.imageIndex',
        'p.price',
        'p.salePrice',
        'p.isSaleOff',
        'pv.id propertyValueId',
        'pv.value propertyValueName',
        'properties.id propertyId',
        'properties.name propertyName',
      ],
      joins: [
        {
          table: 'products p',
          type: 'INNER JOIN',
          condition: 'productId = p.id',
        },
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
          table: 'properties',
          type: 'LEFT JOIN',
          condition: 'pv.propertyId = properties.id',
        },
      ],
      where: {
        ['ppg.id']: {
          compare: 'IN',
          value: `(${ids.toString()})`,
        },
      },
    });

    return q;
  }
}
