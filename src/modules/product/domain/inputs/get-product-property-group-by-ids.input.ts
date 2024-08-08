import { Type } from 'class-transformer';
import { ArrayMaxSize, ArrayMinSize, IsInt, Min } from 'class-validator';

export class GetProductPropertyGroupByIdsInput {
  @ArrayMaxSize(50)
  @ArrayMinSize(1)
  @Type(() => Number)
  @IsInt({ each: true })
  @Min(0, { each: true })
  ids: number[];
}
