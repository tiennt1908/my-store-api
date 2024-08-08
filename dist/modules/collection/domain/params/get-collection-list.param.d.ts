import { PagingParams } from 'src/domain/params/common/paging.params';
export interface GetCollectionListParams extends PagingParams {
    isActive: 0 | 1;
}
