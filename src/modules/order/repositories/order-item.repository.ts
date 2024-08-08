import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderItemEntity } from 'src/entities/order-item.entity';
import { Repository } from 'typeorm';
import { IOrderItemRaw } from '../domain/outputs/order.output';
import { GetItemByOrderIdsParams } from '../domain/params/get-item-by-order-ids.params';
import { OrderItemQuery } from '../queries/order-item.query';

@Injectable()
export class OrderItemRepository {
  constructor(
    @InjectRepository(OrderItemEntity)
    private readonly orderItemRepo: Repository<OrderItemEntity>,
    private readonly q: OrderItemQuery,
  ) {}

  getItemByOrderIds(params: GetItemByOrderIdsParams): Promise<IOrderItemRaw[]> {
    return this.orderItemRepo.query(this.q.getItemByOrderIds(params));
  }
}
