import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity('product_images')
@Unique(['index', 'productId'])
export class ProductImageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', default: 0 })
  index: string;

  @ManyToOne(() => ProductEntity, (prod) => prod.productImages)
  @JoinColumn({ name: 'productId' })
  productId: number;
}
