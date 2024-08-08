import { Type } from 'class-transformer';
import { IsInt, IsOptional, Matches, Min } from 'class-validator';
import { SortType } from 'src/domain/constants/type.constant';
import { PagingInput } from 'src/domain/inputs/paging.input';
import { SORT_TYPE_PATTERN } from 'src/domain/pattern/sort-type.pattern';
import { OrderSortColsType } from '../types/order.type';
import { ORDER_COLS_PATTERN } from '../pattern/order-cols.pattern';

export class GetOrderListInput extends PagingInput {
  @Type(() => Number)
  @IsInt()
  @Min(0)
  userId: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  statusId: number;

  @Matches(SORT_TYPE_PATTERN)
  sortType: SortType;

  @Matches(ORDER_COLS_PATTERN)
  sortCol: OrderSortColsType;
}
