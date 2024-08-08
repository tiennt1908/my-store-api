import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RoleEntity } from './role.entity';
import { OrderEntity } from './order.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 42 })
  fullName: string;

  @Column({ type: 'varchar', length: 10, unique: true })
  phoneNumber: string;

  @Column({ type: 'varchar', length: 72 })
  password: string;

  @ManyToOne(() => RoleEntity, (r) => r.users, { nullable: false })
  @JoinColumn({ name: 'roleId' })
  roleId: number;

  @OneToMany(() => OrderEntity, (ord) => ord.userId)
  orders: OrderEntity[];
}
