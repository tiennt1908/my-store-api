import { Type } from 'class-transformer';
import { IsInt, IsOptional, Min } from 'class-validator';
import { PagingInput } from 'src/domain/inputs/paging.input';

export class GetCategoryListInput extends PagingInput {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  @Min(0)
  parentCategoryId: number;
}
