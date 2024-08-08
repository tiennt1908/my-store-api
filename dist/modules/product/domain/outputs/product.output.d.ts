export interface IProduct {
    id: number;
    name: string;
    slug: string;
    desc: string;
    imageindex: number;
    price: number;
    salePrice: number;
    salePercent: number;
    totalSupply: number;
    totalSold: number;
    isSaleOff: number;
    createAt: number;
}
export interface IProductImage {
    id: number;
    index: number;
    productId: number;
}
export interface IProductPropertyElement {
    id: number;
    totalSupply: number;
    productId: number;
    propertyId: number;
    propertyName: number;
    propertyValueId: number;
    propertyValue: string;
}
export interface IProductPropertyGroup {
    id: number;
    totalSupply: number;
    productId: number;
    price: number;
    salePrice: number;
    isSaleOff: boolean;
}
