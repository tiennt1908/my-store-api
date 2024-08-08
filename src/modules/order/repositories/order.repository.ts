import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from 'src/entities/order.entity';
import { InsertResult, Repository } from 'typeorm';
import { IOrder, IOrderItemRaw } from '../domain/outputs/order.output';
import { CreateOrderParams } from '../domain/params/create-order.params';
import { GetItemByOrderIdsParams } from '../domain/params/get-item-by-order-ids.params';
import { GetOrderListParams } from '../domain/params/get-order-list.params';
import { OrderQuery } from '../queries/order.query';

@Injectable()
export class OrderRepository {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepo: Repository<OrderEntity>,
    private readonly q: OrderQuery,
  ) {}

  async create(params: CreateOrderParams): Promise<InsertResult> {
    const q = this.q.create(params);

    return this.orderRepo.query(q);
  }

  getList(params: GetOrderListParams): Promise<IOrder[]> {
    return this.orderRepo.query(this.q.getList(params));
  }

  async getListCount(params: GetOrderListParams): Promise<number> {
    const total =
      ((await this.orderRepo.query(this.q.getListCount(params)))?.[0]?.total ||
        0) * 1;

    return total;
  }
}
