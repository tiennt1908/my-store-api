import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { ProductImageEntity } from './product-image.entity';
import { ProductPropertyGroupEntity } from './product-property-group.entity';
import { PropertyValueEntity } from './property-value.entity';

@Entity('property_items')
@Unique(['propertyValueId', 'propertyGroupId'])
export class PropertyItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProductPropertyGroupEntity, (prod) => prod.propertyItems)
  @JoinColumn({ name: 'propertyGroupId' })
  propertyGroupId: number;

  @ManyToOne(() => PropertyValueEntity, (pv) => pv.propertyItems)
  @JoinColumn({ name: 'propertyValueId' })
  propertyValueId: number;
}
