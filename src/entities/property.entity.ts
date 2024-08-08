import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PropertyValueEntity } from './property-value.entity';

@Entity('properties')
export class PropertyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 42, nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  desc: string;

  @OneToMany(() => PropertyValueEntity, (pv) => pv.propertyId)
  values: PropertyValueEntity[];
}
