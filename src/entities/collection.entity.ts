import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductCollectionEntity } from './product-collection.entity';

@Entity('collection')
export class CollectionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 64, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 128, unique: true, nullable: false })
  slug: string;

  @Column({ type: 'varchar', nullable: true })
  desc: string;

  @Column({ type: 'varchar' })
  img: string;

  @Column({ type: 'boolean' })
  isActive: boolean;

  @OneToMany(() => ProductCollectionEntity, (prod) => prod.collectionId)
  products: ProductCollectionEntity[];
}
