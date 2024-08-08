import { IsOptional, Matches } from 'class-validator';
import { PagingInput } from 'src/domain/inputs/paging.input';

export class GetCollectionListInput extends PagingInput {
  @IsOptional()
  @Matches(/0|1/)
  isActive: 0 | 1;
}
