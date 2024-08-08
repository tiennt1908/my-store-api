import { IsString, Length } from 'class-validator';

export class GetProductInput {
  @IsString()
  @Length(1, 256)
  slug: string;
}
