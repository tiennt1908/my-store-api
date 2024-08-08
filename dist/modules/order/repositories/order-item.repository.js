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
exports.OrderItemRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const order_item_entity_1 = require("../../../entities/order-item.entity");
const typeorm_2 = require("typeorm");
const order_item_query_1 = require("../queries/order-item.query");
let OrderItemRepository = class OrderItemRepository {
    constructor(orderItemRepo, q) {
        this.orderItemRepo = orderItemRepo;
        this.q = q;
    }
    getItemByOrderIds(params) {
        return this.orderItemRepo.query(this.q.getItemByOrderIds(params));
    }
};
exports.OrderItemRepository = OrderItemRepository;
exports.OrderItemRepository = OrderItemRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_item_entity_1.OrderItemEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        order_item_query_1.OrderItemQuery])
], OrderItemRepository);
//# sourceMappingURL=order-item.repository.js.map