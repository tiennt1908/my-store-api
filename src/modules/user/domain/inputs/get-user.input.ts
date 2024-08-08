import { Type } from 'class-transformer';
import { IsInt, Length, Matches, Min } from 'class-validator';

export class GetUserInput {
  @Type(() => Number)
  @IsInt()
  @Min(0)
  userId: number;
}
