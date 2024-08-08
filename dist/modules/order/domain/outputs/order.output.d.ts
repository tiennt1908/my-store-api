export interface IOrder {
    id: number;
    address: string;
    phoneNumber: string;
    createAt: number;
    userId?: number;
    statusId: number;
    statusName: string;
}
export interface IOrderItemRaw {
    id: number;
    orderId: number;
    phoneNumber: string;
    address: string;
    createAt: number;
    statusId: number;
    statusName: string;
    productId: number;
    name: string;
    slug: string;
    imageIndex: number;
    price: number;
    priceAtOrder: number;
    amount: number;
    isSaleOff: 0 | 1;
    propertyValueId: number | null;
    propertyValueName: string | null;
    propertyId: number | null;
    propertyName: string | null;
}
export interface INameId {
    id: number;
    name: string;
}
export interface IProperty extends INameId {
    optionSelected: INameId;
}
export interface IOrderItem {
    id: number;
    productId: number;
    name: string;
    slug: string;
    imageIndex: number;
    price: number;
    priceAtOrder: number;
    amount: number;
    properties: IProperty[];
}
export interface IOrderDetail extends IOrder {
    items: IOrderItem[];
}
