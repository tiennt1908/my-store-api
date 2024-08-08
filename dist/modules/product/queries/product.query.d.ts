import { GetProductListParams } from '../domain/params/get-product-list.param';
import { GetProductParams } from '../domain/params/get-product.param';
import { UpdateProductParams } from '../domain/params/update-product.param';
export declare class ProductQuery {
    getList({ index, limit, isSaleOff, searchValue, categoryId, collectionId, sortCol, sortType, }: GetProductListParams): string;
    getListCount({ isSaleOff, searchValue, categoryId, collectionId, }: GetProductListParams): string;
    get({ slug }: GetProductParams): string;
    batchUpdate(params: UpdateProductParams[]): string;
}
