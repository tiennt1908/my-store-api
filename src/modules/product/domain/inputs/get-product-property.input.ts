import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';

export class GetProductPropertyInput {
  @Type(() => Number)
  @IsInt()
  @Min(0)
  productId: number;
}
