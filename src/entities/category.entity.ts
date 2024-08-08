import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductCategoryEntity } from './product-category.entity';

@Entity('categories')
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 64, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 128, unique: true, nullable: false })
  slug: string;

  @ManyToOne(() => CategoryEntity, (cate) => cate.childCategories)
  parentCategory: CategoryEntity;

  @OneToMany(() => CategoryEntity, (cate) => cate.parentCategory)
  childCategories: CategoryEntity[];

  @OneToMany(() => ProductCategoryEntity, (prod) => prod.productId)
  products: ProductCategoryEntity[];
}
