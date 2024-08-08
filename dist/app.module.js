"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const serve_static_1 = require("@nestjs/serve-static");
const typeorm_1 = require("@nestjs/typeorm");
const path_1 = require("path");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const category_entity_1 = require("./entities/category.entity");
const collection_entity_1 = require("./entities/collection.entity");
const order_item_entity_1 = require("./entities/order-item.entity");
const order_status_entity_1 = require("./entities/order-status.entity");
const order_entity_1 = require("./entities/order.entity");
const permission_entity_1 = require("./entities/permission.entity");
const product_category_entity_1 = require("./entities/product-category.entity");
const product_collection_entity_1 = require("./entities/product-collection.entity");
const product_image_entity_1 = require("./entities/product-image.entity");
const product_entity_1 = require("./entities/product.entity");
const product_property_group_entity_1 = require("./entities/product-property-group.entity");
const property_entity_1 = require("./entities/property.entity");
const role_permission_1 = require("./entities/role-permission");
const role_entity_1 = require("./entities/role.entity");
const user_entity_1 = require("./entities/user.entity");
const auth_module_1 = require("./modules/auth/auth.module");
const property_item_entity_1 = require("./entities/property-item.entity");
const category_module_1 = require("./modules/category/category.module");
const product_module_1 = require("./modules/product/product.module");
const property_value_entity_1 = require("./entities/property-value.entity");
const collection_module_1 = require("./modules/collection/collection.module");
const order_module_1 = require("./modules/order/order.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'store',
                entities: [
                    category_entity_1.CategoryEntity,
                    collection_entity_1.CollectionEntity,
                    order_item_entity_1.OrderItemEntity,
                    order_status_entity_1.OrderStatusEntity,
                    order_entity_1.OrderEntity,
                    permission_entity_1.PermissionEntity,
                    product_category_entity_1.ProductCategoryEntity,
                    product_collection_entity_1.ProductCollectionEntity,
                    product_image_entity_1.ProductImageEntity,
                    product_property_group_entity_1.ProductPropertyGroupEntity,
                    product_entity_1.ProductEntity,
                    property_item_entity_1.PropertyItemEntity,
                    property_entity_1.PropertyEntity,
                    property_value_entity_1.PropertyValueEntity,
                    role_permission_1.RolePermissionEntity,
                    role_entity_1.RoleEntity,
                    user_entity_1.UserEntity,
                ],
                synchronize: true,
                autoLoadEntities: true,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'uploads'),
                serveRoot: '/uploads',
            }),
            auth_module_1.AuthModule,
            category_module_1.CategoryModule,
            product_module_1.ProductModule,
            collection_module_1.CollectionModule,
            order_module_1.OrderModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map