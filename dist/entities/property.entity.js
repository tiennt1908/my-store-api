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
exports.PropertyEntity = void 0;
const typeorm_1 = require("typeorm");
const property_value_entity_1 = require("./property-value.entity");
let PropertyEntity = class PropertyEntity {
};
exports.PropertyEntity = PropertyEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PropertyEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 42, nullable: false }),
    __metadata("design:type", String)
], PropertyEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], PropertyEntity.prototype, "desc", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => property_value_entity_1.PropertyValueEntity, (pv) => pv.propertyId),
    __metadata("design:type", Array)
], PropertyEntity.prototype, "values", void 0);
exports.PropertyEntity = PropertyEntity = __decorate([
    (0, typeorm_1.Entity)('properties')
], PropertyEntity);
//# sourceMappingURL=property.entity.js.map