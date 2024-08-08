import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';

export class GetProductImageListInput {
  @Type(() => Number)
  @IsInt()
  @Min(0)
  productId: number;
}
