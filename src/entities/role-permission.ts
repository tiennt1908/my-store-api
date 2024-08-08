import {
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { RoleEntity } from './role.entity';
import { PermissionEntity } from './permission.entity';

@Entity('role_permissions')
@Unique(['permissionId', 'roleId'])
export class RolePermissionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PermissionEntity, (r) => r.rolePermissions, {
    nullable: false,
  })
  @JoinColumn({ name: 'permissionId' })
  permissionId: number;

  @ManyToOne(() => RoleEntity, (r) => r.rolePermissions, { nullable: false })
  @JoinColumn({ name: 'roleId' })
  roleId: number;
}
