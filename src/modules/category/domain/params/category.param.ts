import { PagingParams } from 'src/domain/params/common/paging.params';

export interface GetCategoryListParams extends PagingParams {
  parentCategoryId?: number;
}
