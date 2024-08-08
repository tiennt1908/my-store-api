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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const get_product_list_usecase_1 = require("../usecases/products/get-product-list.usecase");
const get_product_list_input_1 = require("../domain/inputs/get-product-list.input");
const get_product_input_1 = require("../domain/inputs/get-product.input");
const get_product_usecase_1 = require("../usecases/products/get-product.usecase");
const get_product_image_list_input_1 = require("../domain/inputs/get-product-image-list.input");
const get_product_image_list_usecase_1 = require("../usecases/images/get-product-image-list.usecase");
const get_product_property_input_1 = require("../domain/inputs/get-product-property.input");
const get_product_property_usecase_1 = require("../usecases/properties/get-product-property.usecase");
const get_product_property_group_by_ids_usecase_1 = require("../usecases/properties/get-product-property-group-by-ids.usecase");
const get_product_property_group_by_ids_input_1 = require("../domain/inputs/get-product-property-group-by-ids.input");
const get_product_cart_by_property_group_ids_usecase_1 = require("../usecases/properties/get-product-cart-by-property-group-ids.usecase");
let ProductController = class ProductController {
    constructor(getProductListUseCase, getProductUseCase, getProductImageListUseCase, getProductPropertyUseCase, getProductPropertyGroupByIdsUseCase, getProductCartByPropertyGroupIdsUseCase) {
        this.getProductListUseCase = getProductListUseCase;
        this.getProductUseCase = getProductUseCase;
        this.getProductImageListUseCase = getProductImageListUseCase;
        this.getProductPropertyUseCase = getProductPropertyUseCase;
        this.getProductPropertyGroupByIdsUseCase = getProductPropertyGroupByIdsUseCase;
        this.getProductCartByPropertyGroupIdsUseCase = getProductCartByPropertyGroupIdsUseCase;
    }
    async getList(input) {
        return await this.getProductListUseCase.execute(input);
    }
    async get(input) {
        return await this.getProductUseCase.execute(input);
    }
    async getProductImageList(input) {
        return await this.getProductImageListUseCase.execute(input);
    }
    async getProductPropertyList(input) {
        return await this.getProductPropertyUseCase.execute(input);
    }
    async getProductPropertyGroupByIds(input) {
        return await this.getProductPropertyGroupByIdsUseCase.execute(input);
    }
    async getProductCartByPropertyGroupIds(input) {
        return await this.getProductCartByPropertyGroupIdsUseCase.execute(input);
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_product_list_input_1.GetProductListInput]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getList", null);
__decorate([
    (0, common_1.Get)('/detail'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_product_input_1.GetProductInput]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('/images'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_product_image_list_input_1.GetProductImageListInput]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductImageList", null);
__decorate([
    (0, common_1.Get)('/properties'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_product_property_input_1.GetProductPropertyInput]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductPropertyList", null);
__decorate([
    (0, common_1.Get)('/property-group'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_product_property_group_by_ids_input_1.GetProductPropertyGroupByIdsInput]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductPropertyGroupByIds", null);
__decorate([
    (0, common_1.Post)('/cart'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_product_property_group_by_ids_input_1.GetProductPropertyGroupByIdsInput]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductCartByPropertyGroupIds", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('api/products'),
    __metadata("design:paramtypes", [get_product_list_usecase_1.GetProductListUseCase,
        get_product_usecase_1.GetProductUseCase,
        get_product_image_list_usecase_1.GetProductImageListUseCase,
        get_product_property_usecase_1.GetProductPropertyUseCase,
        get_product_property_group_by_ids_usecase_1.GetProductPropertyGroupByIdsUseCase,
        get_product_cart_by_property_group_ids_usecase_1.GetProductCartByPropertyGroupIdsUseCase])
], ProductController);
//# sourceMappingURL=product.controller.js.map