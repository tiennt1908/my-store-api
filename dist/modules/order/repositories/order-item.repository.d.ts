import { OrderItemEntity } from 'src/entities/order-item.entity';
import { Repository } from 'typeorm';
import { IOrderItemRaw } from '../domain/outputs/order.output';
import { GetItemByOrderIdsParams } from '../domain/params/get-item-by-order-ids.params';
import { OrderItemQuery } from '../queries/order-item.query';
export declare class OrderItemRepository {
    private readonly orderItemRepo;
    private readonly q;
    constructor(orderItemRepo: Repository<OrderItemEntity>, q: OrderItemQuery);
    getItemByOrderIds(params: GetItemByOrderIdsParams): Promise<IOrderItemRaw[]>;
}
