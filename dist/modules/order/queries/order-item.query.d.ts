import { CreateOrderItemParams } from '../domain/inputs/create-order-item.input';
import { GetItemByOrderIdsParams } from '../domain/params/get-item-by-order-ids.params';
export declare class OrderItemQuery {
    create(input: CreateOrderItemParams[]): string;
    getItemByOrderIds({ userId, ids }: GetItemByOrderIdsParams): string;
}
