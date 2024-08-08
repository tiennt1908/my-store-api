import { PropertyItemEntity } from './property-item.entity';
import { OrderItemEntity } from './order-item.entity';
export declare class ProductPropertyGroupEntity {
    id: number;
    totalSupply: number;
    productId: number;
    propertyItems: PropertyItemEntity[];
    orderItems: OrderItemEntity[];
}
