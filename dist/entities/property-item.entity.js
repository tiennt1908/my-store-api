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
exports.PropertyItemEntity = void 0;
const typeorm_1 = require("typeorm");
const product_property_group_entity_1 = require("./product-property-group.entity");
const property_value_entity_1 = require("./property-value.entity");
let PropertyItemEntity = class PropertyItemEntity {
};
exports.PropertyItemEntity = PropertyItemEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PropertyItemEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_property_group_entity_1.ProductPropertyGroupEntity, (prod) => prod.propertyItems),
    (0, typeorm_1.JoinColumn)({ name: 'propertyGroupId' }),
    __metadata("design:type", Number)
], PropertyItemEntity.prototype, "propertyGroupId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => property_value_entity_1.PropertyValueEntity, (pv) => pv.propertyItems),
    (0, typeorm_1.JoinColumn)({ name: 'propertyValueId' }),
    __metadata("design:type", Number)
], PropertyItemEntity.prototype, "propertyValueId", void 0);
exports.PropertyItemEntity = PropertyItemEntity = __decorate([
    (0, typeorm_1.Entity)('property_items'),
    (0, typeorm_1.Unique)(['propertyValueId', 'propertyGroupId'])
], PropertyItemEntity);
//# sourceMappingURL=property-item.entity.js.map