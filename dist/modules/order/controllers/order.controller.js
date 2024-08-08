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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../../auth/guards/auth.guard");
const user_guard_1 = require("../../auth/guards/user.guard");
const create_order_input_1 = require("../domain/inputs/create-order.input");
const create_order_usecase_1 = require("../usecases/order/create-order.usecase");
const get_order_list_input_1 = require("../domain/inputs/get-order-list.input");
const get_order_list_usecase_1 = require("../usecases/order/get-order-list.usecase");
const get_item_by_order_ids_usecase_1 = require("../usecases/order-item/get-item-by-order-ids.usecase");
const get_item_by_order_ids_input_1 = require("../domain/inputs/get-item-by-order-ids.input");
let OrderController = class OrderController {
    constructor(getOrderListUseCase, getItemByOrderIdsUseCase, createOrderUseCase) {
        this.getOrderListUseCase = getOrderListUseCase;
        this.getItemByOrderIdsUseCase = getItemByOrderIdsUseCase;
        this.createOrderUseCase = createOrderUseCase;
    }
    async getList(input) {
        return await this.getOrderListUseCase.execute(input);
    }
    async getItemByOrderIds(input) {
        return await this.getItemByOrderIdsUseCase.execute(input);
    }
    async create(input) {
        return this.createOrderUseCase.execute(input);
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard, user_guard_1.UserGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_order_list_input_1.GetOrderListInput]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getList", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard, user_guard_1.UserGuard),
    (0, common_1.Post)('/items'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_item_by_order_ids_input_1.GetItemByOrderIdsInput]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getItemByOrderIds", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard, user_guard_1.UserGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_input_1.CreateOrderInput]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "create", null);
exports.OrderController = OrderController = __decorate([
    (0, common_1.Controller)('api/orders'),
    __metadata("design:paramtypes", [get_order_list_usecase_1.GetOrderListUseCase,
        get_item_by_order_ids_usecase_1.GetItemByOrderIdsUseCase,
        create_order_usecase_1.CreateOrderUseCase])
], OrderController);
//# sourceMappingURL=order.controller.js.map