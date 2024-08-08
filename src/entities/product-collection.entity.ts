import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CollectionEntity } from './collection.entity';
import { ProductEntity } from './product.entity';

@Entity('product_collection')
export class ProductCollectionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => CollectionEntity, (collection) => collection.products, {
    nullable: false,
  })
  @JoinColumn({ name: 'collectionId' })
  collectionId: number;

  @ManyToOne(() => ProductEntity, (prod) => prod.collections, {
    nullable: false,
  })
  @JoinColumn({ name: 'productId' })
  productId: number;
}
