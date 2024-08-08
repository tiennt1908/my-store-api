import { RolePermissionEntity } from './role-permission';
export declare class PermissionEntity {
    id: number;
    key: string;
    name: string;
    rolePermissions: RolePermissionEntity[];
}
