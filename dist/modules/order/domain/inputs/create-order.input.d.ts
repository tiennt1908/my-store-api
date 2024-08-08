export declare class OrderItemInput {
    productPropertyGroupId: number;
    amount: number;
}
export declare class CreateOrderInput {
    address: string;
    phoneNumber: string;
    userId: number;
    orderItems: OrderItemInput[];
}
