import { OrderEntity } from './order.entity';
export declare class UserEntity {
    id: number;
    fullName: string;
    phoneNumber: string;
    password: string;
    roleId: number;
    orders: OrderEntity[];
}
