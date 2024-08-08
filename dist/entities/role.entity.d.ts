import { RolePermissionEntity } from './role-permission';
import { UserEntity } from './user.entity';
export declare class RoleEntity {
    id: number;
    key: string;
    name: string;
    rolePermissions: RolePermissionEntity[];
    users: UserEntity[];
}
