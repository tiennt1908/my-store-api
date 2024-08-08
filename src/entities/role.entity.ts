import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RolePermissionEntity } from './role-permission';
import { UserEntity } from './user.entity';

@Entity('roles')
export class RoleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 42, nullable: false, unique: true })
  key: string;

  @Column({ type: 'varchar', length: 42, nullable: false })
  name: string;

  @OneToMany(() => RolePermissionEntity, (p) => p.roleId)
  rolePermissions: RolePermissionEntity[];

  @OneToMany(() => UserEntity, (u) => u.roleId)
  users: UserEntity[];
}
