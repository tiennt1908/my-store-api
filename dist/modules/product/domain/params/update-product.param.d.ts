export interface UpdateProductParams {
    id: number;
    name?: string;
    slug?: string;
    desc?: string;
    imageIndex?: string;
    price?: number;
    salePrice?: number;
    totalSupply?: number | string;
    totalSold?: number | string;
    isSaleOff?: 0 | 1;
}
