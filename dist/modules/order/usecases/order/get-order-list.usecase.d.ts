import { OrderRepository } from '../../repositories/order.repository';
import { GetOrderListInput } from '../../domain/inputs/get-order-list.input';
export declare class GetOrderListUseCase {
    private readonly orderRepo;
    constructor(orderRepo: OrderRepository);
    execute(input: GetOrderListInput): Promise<{
        success: boolean;
        data: {
            total: number;
            list: import("../../domain/outputs/order.output").IOrder[];
        };
    }>;
}
