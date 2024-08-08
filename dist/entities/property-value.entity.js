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
exports.PropertyValueEntity = void 0;
const typeorm_1 = require("typeorm");
const property_entity_1 = require("./property.entity");
const property_item_entity_1 = require("./property-item.entity");
let PropertyValueEntity = class PropertyValueEntity {
};
exports.PropertyValueEntity = PropertyValueEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PropertyValueEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 128, nullable: true }),
    __metadata("design:type", String)
], PropertyValueEntity.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => property_entity_1.PropertyEntity, (prop) => prop.values),
    (0, typeorm_1.JoinColumn)({ name: 'propertyId' }),
    __metadata("design:type", Number)
], PropertyValueEntity.prototype, "propertyId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => property_item_entity_1.PropertyItemEntity, (pi) => pi),
    __metadata("design:type", Array)
], PropertyValueEntity.prototype, "propertyItems", void 0);
exports.PropertyValueEntity = PropertyValueEntity = __decorate([
    (0, typeorm_1.Entity)('property_values')
], PropertyValueEntity);
//# sourceMappingURL=property-value.entity.js.map