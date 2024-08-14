import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductCategoryEntity } from './product-category.entity';
import { ProductCollectionEntity } from './product-collection.entity';
import { ProductPropertyGroupEntity } from './product-property-group.entity';
import { ProductImageEntity } from './product-image.entity';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 128, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 256, unique: true, nullable: false })
  slug: string;

  @Column({ type: 'varchar', length: 512, nullable: true })
  desc: string;

  @Column({ type: 'int', default: 0 })
  imageIndex: number;

  @Column({ type: 'double', default: 0 })
  price: number;

  @Column({ type: 'double', default: 0 })
  salePrice: number;

  @Column({ type: 'int', default: 0 })
  totalSold: number;

  @Column({ type: 'boolean', default: false })
  isSaleOff: boolean;

  @Column({ type: 'int', default: 0 })
  createAt: number;

  @OneToMany(() => ProductCategoryEntity, (cate) => cate.categoryId)
  categories: ProductCategoryEntity[];

  @OneToMany(
    () => ProductCollectionEntity,
    (collection) => collection.productId,
  )
  collections: ProductCollectionEntity[];

  @OneToMany(
    () => ProductPropertyGroupEntity,
    (propertyGroup) => propertyGroup.productId,
  )
  propertyGroupList: ProductPropertyGroupEntity[];

  @OneToMany(() => ProductImageEntity, (img) => img.productId)
  productImages: ProductImageEntity[];
}
