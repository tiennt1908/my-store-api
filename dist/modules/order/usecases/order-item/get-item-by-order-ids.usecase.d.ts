import { GetItemByOrderIdsInput } from '../../domain/inputs/get-item-by-order-ids.input';
import { IOrderDetail } from '../../domain/outputs/order.output';
import { OrderItemRepository } from '../../repositories/order-item.repository';
export declare class GetItemByOrderIdsUseCase {
    private readonly orderItemRepo;
    constructor(orderItemRepo: OrderItemRepository);
    execute(input: GetItemByOrderIdsInput): Promise<{
        success: boolean;
        data: IOrderDetail[];
    }>;
}
