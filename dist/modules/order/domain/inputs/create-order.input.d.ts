export declare class OrderItemInput {
    productPropertyGroupId: number;
    amount: number;
}
export declare class CreateOrderInput {
    address: string;
    recipientName: string;
    phoneNumber: string;
    userId: number;
    orderItems: OrderItemInput[];
}
