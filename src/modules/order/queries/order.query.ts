import { Injectable } from '@nestjs/common';
import { SQLHelper } from 'src/domain/helpers/sql.helper';
import { CreateOrderParams } from '../domain/params/create-order.params';
import { GetItemByOrderIdsParams } from '../domain/params/get-item-by-order-ids.params';
import { GetOrderListParams } from '../domain/params/get-order-list.params';

@Injectable()
export class OrderQuery {
  create(input: CreateOrderParams): string {
    const q = SQLHelper.insert<CreateOrderParams>('orders', input);
    return q;
  }

  getList({
    userId,
    statusId,
    index,
    limit,
    sortCol,
    sortType,
  }: GetOrderListParams): string {
    const q = SQLHelper.select({
      table: 'orders',
      cols: ['orders.*', 'os.name statusName'],
      joins: [
        {
          table: 'order_status os',
          type: 'INNER JOIN',
          condition: 'orders.statusId = os.id',
        },
      ],
      where: {
        userId: {
          compare: '=',
          value: userId,
          logic: 'AND',
        },
        statusId: {
          compare: '=',
          value: statusId,
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
  getListCount({ userId, statusId }: GetOrderListParams): string {
    const q = SQLHelper.select({
      table: 'orders',
      cols: ['COUNT(*) AS total'],
      where: {
        userId: {
          compare: '=',
          value: userId,
          logic: 'AND',
        },
        statusId: {
          compare: '=',
          value: statusId,
        },
      },
    });

    return q;
  }
}
