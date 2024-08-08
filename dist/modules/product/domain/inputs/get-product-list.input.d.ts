import { SortType } from 'src/domain/constants/type.constant';
import { PagingInput } from 'src/domain/inputs/paging.input';
import { ProductSortColsType } from '../types/product.type';
export declare class GetProductListInput extends PagingInput {
    sortType: SortType;
    sortCol: ProductSortColsType;
    categoryId: number;
    collectionId: number;
    isSaleOff: 0 | 1;
    searchValue: string;
}
