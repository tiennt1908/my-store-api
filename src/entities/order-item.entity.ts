import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderEntity } from './order.entity';
import { ProductPropertyGroupEntity } from './product-property-group.entity';

@Entity('order_items')
export class OrderItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', default: 0 })
  amount: number;

  @Column({ type: 'double' })
  price: number;

  @Column({ type: 'double' })
  finalPrice: number;

  @ManyToOne(() => OrderEntity, (ord) => ord.orderItems)
  @JoinColumn({ name: 'orderId' })
  orderId: number;

  @ManyToOne(() => ProductPropertyGroupEntity, (prod) => prod.orderItems)
  @JoinColumn({ name: 'productPropertyGroupId' })
  productPropertyGroupId: number;
}
