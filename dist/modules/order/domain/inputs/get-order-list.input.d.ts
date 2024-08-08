import { SortType } from 'src/domain/constants/type.constant';
import { PagingInput } from 'src/domain/inputs/paging.input';
import { OrderSortColsType } from '../types/order.type';
export declare class GetOrderListInput extends PagingInput {
    userId: number;
    statusId: number;
    sortType: SortType;
    sortCol: OrderSortColsType;
}
