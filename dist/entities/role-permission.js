"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolePermissionEntity = void 0;
const typeorm_1 = require("typeorm");
const role_entity_1 = require("./role.entity");
const permission_entity_1 = require("./permission.entity");
let RolePermissionEntity = class RolePermissionEntity {
};
exports.RolePermissionEntity = RolePermissionEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RolePermissionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => permission_entity_1.PermissionEntity, (r) => r.rolePermissions, {
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'permissionId' }),
    __metadata("design:type", Number)
], RolePermissionEntity.prototype, "permissionId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => role_entity_1.RoleEntity, (r) => r.rolePermissions, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'roleId' }),
    __metadata("design:type", Number)
], RolePermissionEntity.prototype, "roleId", void 0);
exports.RolePermissionEntity = RolePermissionEntity = __decorate([
    (0, typeorm_1.Entity)('role_permissions'),
    (0, typeorm_1.Unique)(['permissionId', 'roleId'])
], RolePermissionEntity);
//# sourceMappingURL=role-permission.js.map