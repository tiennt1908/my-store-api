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
exports.ProductEntity = void 0;
const typeorm_1 = require("typeorm");
const product_category_entity_1 = require("./product-category.entity");
const product_collection_entity_1 = require("./product-collection.entity");
const product_property_group_entity_1 = require("./product-property-group.entity");
const product_image_entity_1 = require("./product-image.entity");
let ProductEntity = class ProductEntity {
};
exports.ProductEntity = ProductEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProductEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 128, nullable: false }),
    __metadata("design:type", String)
], ProductEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 256, unique: true, nullable: false }),
    __metadata("design:type", String)
], ProductEntity.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], ProductEntity.prototype, "desc", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "imageIndex", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', default: 0 }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', default: 0 }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "salePrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "totalSold", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], ProductEntity.prototype, "isSaleOff", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_category_entity_1.ProductCategoryEntity, (cate) => cate.categoryId),
    __metadata("design:type", Array)
], ProductEntity.prototype, "categories", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_collection_entity_1.ProductCollectionEntity, (collection) => collection.productId),
    __metadata("design:type", Array)
], ProductEntity.prototype, "collections", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_property_group_entity_1.ProductPropertyGroupEntity, (propertyGroup) => propertyGroup.productId),
    __metadata("design:type", Array)
], ProductEntity.prototype, "propertyGroupList", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_image_entity_1.ProductImageEntity, (img) => img.productId),
    __metadata("design:type", Array)
], ProductEntity.prototype, "productImages", void 0);
exports.ProductEntity = ProductEntity = __decorate([
    (0, typeorm_1.Entity)('products')
], ProductEntity);
//# sourceMappingURL=product.entity.js.map