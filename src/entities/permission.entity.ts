import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RolePermissionEntity } from './role-permission';

@Entity('permissions')
export class PermissionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 42, nullable: false, unique: true })
  key: string;

  @Column({ type: 'varchar', length: 42, nullable: false })
  name: string;

  @OneToMany(() => RolePermissionEntity, (p) => p.permissionId)
  rolePermissions: RolePermissionEntity[];
}
