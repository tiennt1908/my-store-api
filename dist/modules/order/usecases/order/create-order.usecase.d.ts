import { ProductPropertyGroupQuery } from 'src/modules/product/queries/product-property-group.query';
import { DataSource } from 'typeorm';
import { CreateOrderInput } from '../../domain/inputs/create-order.input';
import { OrderItemQuery } from '../../queries/order-item.query';
import { OrderQuery } from '../../queries/order.query';
export declare class CreateOrderUseCase {
    private dataSource;
    private readonly orderQuery;
    private readonly orderItemQuery;
    private readonly productPropertyGroupQuery;
    constructor(dataSource: DataSource, orderQuery: OrderQuery, orderItemQuery: OrderItemQuery, productPropertyGroupQuery: ProductPropertyGroupQuery);
    execute({ recipientName, address, phoneNumber, userId, orderItems, }: CreateOrderInput): Promise<{
        success: boolean;
        data: any;
    }>;
}
