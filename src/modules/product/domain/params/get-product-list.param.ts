import { SortType } from 'src/domain/constants/type.constant';
import { PagingParams } from 'src/domain/params/common/paging.params';
import { ProductSortColsType } from '../types/product.type';

export interface GetProductListParams extends PagingParams {
  sortCol: ProductSortColsType;
  sortType: SortType;
  isSaleOff?: 0 | 1;
  categoryId?: number;
  collectionId?: number;
  searchValue?: string;
}
