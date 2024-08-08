import { SortType } from 'src/domain/constants/type.constant';
import { PagingParams } from 'src/domain/params/common/paging.params';
import { OrderSortColsType } from '../types/order.type';

export interface GetOrderListParams extends PagingParams {
  userId: number;
  statusId?: number;
  sortCol: OrderSortColsType;
  sortType: SortType;
}
