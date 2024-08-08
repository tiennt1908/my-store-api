import { OrderItemEntity } from './order-item.entity';
export declare class OrderEntity {
    id: number;
    userId: number;
    statusId: number;
    address: string;
    phoneNumber: string;
    createAt: string;
    orderItems: OrderItemEntity[];
}
