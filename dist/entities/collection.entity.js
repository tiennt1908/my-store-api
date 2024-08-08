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
exports.CollectionEntity = void 0;
const typeorm_1 = require("typeorm");
const product_collection_entity_1 = require("./product-collection.entity");
let CollectionEntity = class CollectionEntity {
};
exports.CollectionEntity = CollectionEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CollectionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 64, nullable: false }),
    __metadata("design:type", String)
], CollectionEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 128, unique: true, nullable: false }),
    __metadata("design:type", String)
], CollectionEntity.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], CollectionEntity.prototype, "desc", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], CollectionEntity.prototype, "img", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean' }),
    __metadata("design:type", Boolean)
], CollectionEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_collection_entity_1.ProductCollectionEntity, (prod) => prod.collectionId),
    __metadata("design:type", Array)
], CollectionEntity.prototype, "products", void 0);
exports.CollectionEntity = CollectionEntity = __decorate([
    (0, typeorm_1.Entity)('collection')
], CollectionEntity);
//# sourceMappingURL=collection.entity.js.map