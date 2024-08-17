import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsString,
  Length,
  Matches,
  Min,
  ValidateNested,
} from 'class-validator';

export class OrderItemInput {
  @Type(() => Number)
  @IsInt()
  @Min(0)
  productPropertyGroupId: number;

  @Type(() => Number)
  @IsInt()
  @Min(0)
  amount: number;
}
export class CreateOrderInput {
  @IsString()
  @Length(1, 255)
  address: string;

  @IsString()
  @Length(1, 42)
  recipientName: string;

  @Matches(/^0[0-9]{9}$/, { message: 'Phone number invalid' })
  phoneNumber: string;

  @Type(() => Number)
  @IsInt()
  @Min(0)
  userId: number;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => OrderItemInput)
  orderItems: OrderItemInput[];
}
