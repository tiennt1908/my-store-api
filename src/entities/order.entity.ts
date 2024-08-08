import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { OrderStatusEntity } from './order-status.entity';
import { OrderItemEntity } from './order-item.entity';

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.orders, { nullable: false })
  @JoinColumn({ name: 'userId' })
  userId: number;

  @ManyToOne(() => OrderStatusEntity, (status) => status.orders, {
    nullable: false,
  })
  @JoinColumn({ name: 'statusId' })
  statusId: number;

  @Column({ type: 'varchar', nullable: false })
  address: string;

  @Column({ type: 'varchar', length: 10 })
  phoneNumber: string;

  @Column({ type: 'int', default: 0 })
  createAt: string;

  @OneToMany(() => OrderItemEntity, (ord) => ord.orderId)
  orderItems: OrderItemEntity[];
}
