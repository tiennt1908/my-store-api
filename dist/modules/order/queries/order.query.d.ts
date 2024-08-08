import { CreateOrderParams } from '../domain/params/create-order.params';
import { GetOrderListParams } from '../domain/params/get-order-list.params';
export declare class OrderQuery {
    create(input: CreateOrderParams): string;
    getList({ userId, statusId, index, limit, sortCol, sortType, }: GetOrderListParams): string;
    getListCount({ userId, statusId }: GetOrderListParams): string;
}
