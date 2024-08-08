import { Type } from 'class-transformer';
import { ArrayMaxSize, ArrayMinSize, IsInt, Min } from 'class-validator';

export class GetItemByOrderIdsInput {
  @ArrayMaxSize(20)
  @ArrayMinSize(1)
  @Type(() => Number)
  @IsInt({ each: true })
  @Min(0, { each: true })
  ids: number[];

  @Type(() => Number)
  @IsInt()
  @Min(0)
  userId: number;
}
