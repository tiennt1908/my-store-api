import {
  IsInt,
  IsOptional,
  IsString,
  Length,
  Matches,
  Min,
  MinLength,
} from 'class-validator';
import { SortType } from 'src/domain/constants/type.constant';
import { PagingInput } from 'src/domain/inputs/paging.input';
import { PRODUCT_COLS_PATTERN } from '../pattern/product-cols.pattern';
import { ProductSortColsType } from '../types/product.type';
import { SORT_TYPE_PATTERN } from 'src/domain/pattern/sort-type.pattern';
import { Type } from 'class-transformer';

export class GetProductListInput extends PagingInput {
  @Matches(SORT_TYPE_PATTERN)
  sortType: SortType;

  @Matches(PRODUCT_COLS_PATTERN)
  sortCol: ProductSortColsType;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  categoryId: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  collectionId: number;

  @IsOptional()
  @Matches(/0|1/)
  isSaleOff: 0 | 1;

  @IsOptional()
  @IsString()
  @Length(1, 64)
  searchValue: string;
}
