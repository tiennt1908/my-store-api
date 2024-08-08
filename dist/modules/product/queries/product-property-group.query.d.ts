import { UpdateProductPropertyGroupParams } from '../domain/params/update-product-property-group.param';
export declare class ProductPropertyGroupQuery {
    getProductPropertyGroupByIds(ids: number[] | string[]): string;
    batchUpdate(params: UpdateProductPropertyGroupParams[]): string;
    getProductCartByPropertyGroupIds(ids: number[] | string[]): string;
}
