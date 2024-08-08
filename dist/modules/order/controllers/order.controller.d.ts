import { CreateOrderInput } from '../domain/inputs/create-order.input';
import { CreateOrderUseCase } from '../usecases/order/create-order.usecase';
import { GetOrderListInput } from '../domain/inputs/get-order-list.input';
import { GetOrderListUseCase } from '../usecases/order/get-order-list.usecase';
import { GetItemByOrderIdsUseCase } from '../usecases/order-item/get-item-by-order-ids.usecase';
import { GetItemByOrderIdsInput } from '../domain/inputs/get-item-by-order-ids.input';
export declare class OrderController {
    private readonly getOrderListUseCase;
    private readonly getItemByOrderIdsUseCase;
    private readonly createOrderUseCase;
    constructor(getOrderListUseCase: GetOrderListUseCase, getItemByOrderIdsUseCase: GetItemByOrderIdsUseCase, createOrderUseCase: CreateOrderUseCase);
    getList(input: GetOrderListInput): Promise<{
        success: boolean;
        data: {
            total: number;
            list: import("../domain/outputs/order.output").IOrder[];
        };
    }>;
    getItemByOrderIds(input: GetItemByOrderIdsInput): Promise<{
        success: boolean;
        data: import("../domain/outputs/order.output").IOrderDetail[];
    }>;
    create(input: CreateOrderInput): Promise<{
        success: boolean;
        data: any;
    }>;
}
