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
exports.ProductPropertyGroupEntity = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./product.entity");
const property_item_entity_1 = require("./property-item.entity");
const order_item_entity_1 = require("./order-item.entity");
let ProductPropertyGroupEntity = class ProductPropertyGroupEntity {
};
exports.ProductPropertyGroupEntity = ProductPropertyGroupEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProductPropertyGroupEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ProductPropertyGroupEntity.prototype, "totalSupply", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.ProductEntity, (prod) => prod.propertyGroupList),
    (0, typeorm_1.JoinColumn)({ name: 'productId' }),
    __metadata("design:type", Number)
], ProductPropertyGroupEntity.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => property_item_entity_1.PropertyItemEntity, (item) => item.propertyGroupId),
    __metadata("design:type", Array)
], ProductPropertyGroupEntity.prototype, "propertyItems", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_item_entity_1.OrderItemEntity, (ord) => ord.orderId),
    __metadata("design:type", Array)
], ProductPropertyGroupEntity.prototype, "orderItems", void 0);
exports.ProductPropertyGroupEntity = ProductPropertyGroupEntity = __decorate([
    (0, typeorm_1.Entity)('product_property_group')
], ProductPropertyGroupEntity);
//# sourceMappingURL=product-property-group.entity.js.map