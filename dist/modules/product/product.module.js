"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("../../entities/product.entity");
const product_controller_1 = require("./controllers/product.controller");
const get_product_list_usecase_1 = require("./usecases/products/get-product-list.usecase");
const product_repository_1 = require("./repositories/product.repository");
const product_query_1 = require("./queries/product.query");
const get_product_usecase_1 = require("./usecases/products/get-product.usecase");
const get_product_image_list_usecase_1 = require("./usecases/images/get-product-image-list.usecase");
const product_image_repository_1 = require("./repositories/product-image.repository");
const product_image_query_1 = require("./queries/product-image.query");
const product_image_entity_1 = require("../../entities/product-image.entity");
const get_product_property_usecase_1 = require("./usecases/properties/get-product-property.usecase");
const product_property_repository_1 = require("./repositories/product-property.repository");
const product_property_group_entity_1 = require("../../entities/product-property-group.entity");
const product_property_query_1 = require("./queries/product-property.query");
const product_property_group_query_1 = require("./queries/product-property-group.query");
const get_product_property_group_by_ids_usecase_1 = require("./usecases/properties/get-product-property-group-by-ids.usecase");
const get_product_cart_by_property_group_ids_usecase_1 = require("./usecases/properties/get-product-cart-by-property-group-ids.usecase");
let ProductModule = class ProductModule {
};
exports.ProductModule = ProductModule;
exports.ProductModule = ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                product_entity_1.ProductEntity,
                product_image_entity_1.ProductImageEntity,
                product_property_group_entity_1.ProductPropertyGroupEntity,
            ]),
        ],
        providers: [
            product_repository_1.ProductRepository,
            product_query_1.ProductQuery,
            get_product_list_usecase_1.GetProductListUseCase,
            get_product_usecase_1.GetProductUseCase,
            product_image_repository_1.ProductImageRepository,
            product_image_query_1.ProductImageQuery,
            get_product_image_list_usecase_1.GetProductImageListUseCase,
            product_property_repository_1.ProductPropertyRepository,
            get_product_property_usecase_1.GetProductPropertyUseCase,
            get_product_property_group_by_ids_usecase_1.GetProductPropertyGroupByIdsUseCase,
            get_product_cart_by_property_group_ids_usecase_1.GetProductCartByPropertyGroupIdsUseCase,
            product_property_query_1.ProductPropertyQuery,
            product_property_group_query_1.ProductPropertyGroupQuery,
        ],
        controllers: [product_controller_1.ProductController],
        exports: [product_property_group_query_1.ProductPropertyGroupQuery],
    })
], ProductModule);
//# sourceMappingURL=product.module.js.map