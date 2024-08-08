import { Type } from 'class-transformer';
import { IsInt, Max, Min } from 'class-validator';

export class PagingInput {
  @IsInt()
  @Min(0)
  @Type(() => Number)
  index: number;

  @IsInt()
  @Min(1)
  @Max(200)
  @Type(() => Number)
  limit: number;
}
