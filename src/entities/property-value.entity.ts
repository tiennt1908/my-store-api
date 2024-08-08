import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PropertyEntity } from './property.entity';
import { PropertyItemEntity } from './property-item.entity';

@Entity('property_values')
export class PropertyValueEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 128, nullable: true })
  value: string;

  @ManyToOne(() => PropertyEntity, (prop) => prop.values)
  @JoinColumn({ name: 'propertyId' })
  propertyId: number;

  @OneToMany(() => PropertyItemEntity, (pi) => pi)
  propertyItems: PropertyItemEntity[];
}
