import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { ProductEntity } from './product.entity';
import { CategoryEntity } from './category.entity';

@Entity('product_categories')
@Unique(['productId', 'categoryId'])
export class ProductCategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProductEntity, (prop) => prop.categories, {
    nullable: false,
  })
  @JoinColumn({ name: 'productId' })
  productId: number;

  @ManyToOne(() => CategoryEntity, (cate) => cate.products, {
    nullable: false,
  })
  @JoinColumn({ name: 'categoryId' })
  categoryId: number;
}
