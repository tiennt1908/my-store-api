import { Injectable } from '@nestjs/common';
import { SQLHelper } from 'src/domain/helpers/sql.helper';
import { CreateOrderItemParams } from '../domain/inputs/create-order-item.input';
import { GetItemByOrderIdsParams } from '../domain/params/get-item-by-order-ids.params';

@Injectable()
export class OrderItemQuery {
  create(input: CreateOrderItemParams[]): string {
    const q = SQLHelper.batchInsert<CreateOrderItemParams>(
      'order_items',
      input,
    );
    return q;
  }

  getItemByOrderIds({ userId, ids }: GetItemByOrderIdsParams): string {
    const q = SQLHelper.select({
      table: 'order_items oi',
      cols: [
        'oi.id',
        'orders.id orderId',
        'orders.recipientName recipientName',
        'orders.phoneNumber',
        'orders.address',
        'orders.createAt',
        'orders.statusId',
        'os.name statusName',

        'p.id productId',
        'p.name',
        'p.slug',
        'p.imageIndex',
        'p.price',
        'oi.price priceAtOrder',
        'oi.amount',
        'p.isSaleOff',
        'pv.id propertyValueId',
        'pv.value propertyValueName',
        'properties.id propertyId',
        'properties.name propertyName',
      ],
      joins: [
        {
          table: 'orders',
          type: 'INNER JOIN',
          condition: 'oi.orderId = orders.id',
        },
        {
          table: 'order_status os',
          type: 'INNER JOIN',
          condition: 'orders.statusId = os.id',
        },
        {
          table: 'product_property_group ppg',
          type: 'INNER JOIN',
          condition: 'oi.productPropertyGroupId = ppg.id',
        },
        {
          table: 'products p',
          type: 'INNER JOIN',
          condition: 'ppg.productId = p.id',
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
        userId: {
          compare: '=',
          value: userId,
          logic: 'AND',
        },
        orderId: {
          compare: 'IN',
          value: `(${ids.toString()})`,
        },
      },
    });

    return q;
  }
}
