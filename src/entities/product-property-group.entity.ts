import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductEntity } from './product.entity';
import { PropertyItemEntity } from './property-item.entity';
import { OrderItemEntity } from './order-item.entity';

@Entity('product_property_group')
export class ProductPropertyGroupEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', default: 0 })
  totalSupply: number;

  @ManyToOne(() => ProductEntity, (prod) => prod.propertyGroupList)
  @JoinColumn({ name: 'productId' })
  productId: number;

  @OneToMany(() => PropertyItemEntity, (item) => item.propertyGroupId)
  propertyItems: PropertyItemEntity[];

  @OneToMany(() => OrderItemEntity, (ord) => ord.orderId)
  orderItems: OrderItemEntity[];
}
