import { OrderEntity } from 'src/entities/order.entity';
import { InsertResult, Repository } from 'typeorm';
import { IOrder } from '../domain/outputs/order.output';
import { CreateOrderParams } from '../domain/params/create-order.params';
import { GetOrderListParams } from '../domain/params/get-order-list.params';
import { OrderQuery } from '../queries/order.query';
export declare class OrderRepository {
    private readonly orderRepo;
    private readonly q;
    constructor(orderRepo: Repository<OrderEntity>, q: OrderQuery);
    create(params: CreateOrderParams): Promise<InsertResult>;
    getList(params: GetOrderListParams): Promise<IOrder[]>;
    getListCount(params: GetOrderListParams): Promise<number>;
}
