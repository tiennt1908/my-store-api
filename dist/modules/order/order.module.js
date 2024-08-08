"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const order_entity_1 = require("../../entities/order.entity");
const order_controller_1 = require("./controllers/order.controller");
const order_query_1 = require("./queries/order.query");
const order_item_query_1 = require("./queries/order-item.query");
const product_module_1 = require("../product/product.module");
const create_order_usecase_1 = require("./usecases/order/create-order.usecase");
const get_order_list_usecase_1 = require("./usecases/order/get-order-list.usecase");
const get_item_by_order_ids_usecase_1 = require("./usecases/order-item/get-item-by-order-ids.usecase");
const order_item_entity_1 = require("../../entities/order-item.entity");
const order_repository_1 = require("./repositories/order.repository");
const order_item_repository_1 = require("./repositories/order-item.repository");
let OrderModule = class OrderModule {
};
exports.OrderModule = OrderModule;
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([order_entity_1.OrderEntity, order_item_entity_1.OrderItemEntity]),
            product_module_1.ProductModule,
        ],
        providers: [
            order_query_1.OrderQuery,
            order_item_query_1.OrderItemQuery,
            order_repository_1.OrderRepository,
            order_item_repository_1.OrderItemRepository,
            create_order_usecase_1.CreateOrderUseCase,
            get_order_list_usecase_1.GetOrderListUseCase,
            get_item_by_order_ids_usecase_1.GetItemByOrderIdsUseCase,
        ],
        controllers: [order_controller_1.OrderController],
        exports: [],
    })
], OrderModule);
//# sourceMappingURL=order.module.js.map