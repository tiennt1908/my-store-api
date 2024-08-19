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
exports.GetItemByOrderIdsUseCase = void 0;
const common_1 = require("@nestjs/common");
const order_item_repository_1 = require("../../repositories/order-item.repository");
let GetItemByOrderIdsUseCase = class GetItemByOrderIdsUseCase {
    constructor(orderItemRepo) {
        this.orderItemRepo = orderItemRepo;
    }
    async execute(input) {
        try {
            const orderItemsRaw = await this.orderItemRepo.getItemByOrderIds(input);
            const orderItems = [];
            orderItemsRaw.forEach((e) => {
                const index = orderItems.findIndex((o) => o.id === e.orderId);
                if (index === -1) {
                    orderItems.push({
                        id: e.orderId,
                        recipientName: e.recipientName,
                        address: e.address,
                        phoneNumber: e.phoneNumber,
                        createAt: e.createAt,
                        statusId: e.statusId,
                        statusName: e.statusName,
                        items: [
                            {
                                id: e.id,
                                productId: e.productId,
                                name: e.name,
                                slug: e.slug,
                                imageIndex: e.imageIndex,
                                price: e.price,
                                finalPrice: e.finalPrice,
                                amount: e.amount,
                                properties: e.propertyId
                                    ? [
                                        {
                                            id: e.propertyId,
                                            name: e.propertyName,
                                            optionSelected: {
                                                id: e.propertyValueId,
                                                name: e.propertyValueName,
                                            },
                                        },
                                    ]
                                    : [],
                            },
                        ],
                    });
                }
                else {
                    if (e.propertyId) {
                        const itemIndex = orderItems[index].items.findIndex((i) => i.id === e.id);
                        if (itemIndex === -1) {
                            orderItems[index].items.push({
                                id: e.id,
                                productId: e.productId,
                                name: e.name,
                                slug: e.slug,
                                imageIndex: e.imageIndex,
                                price: e.price,
                                finalPrice: e.finalPrice,
                                amount: e.amount,
                                properties: e.propertyId
                                    ? [
                                        {
                                            id: e.propertyId,
                                            name: e.propertyName,
                                            optionSelected: {
                                                id: e.propertyValueId,
                                                name: e.propertyValueName,
                                            },
                                        },
                                    ]
                                    : [],
                            });
                        }
                        else {
                            orderItems[index].items[itemIndex].properties.push({
                                id: e.propertyId,
                                name: e.propertyName,
                                optionSelected: {
                                    id: e.propertyValueId,
                                    name: e.propertyValueName,
                                },
                            });
                        }
                    }
                }
            });
            return {
                success: true,
                data: orderItems,
            };
        }
        catch (err) {
            throw new common_1.HttpException({
                success: false,
                data: err.message,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.GetItemByOrderIdsUseCase = GetItemByOrderIdsUseCase;
exports.GetItemByOrderIdsUseCase = GetItemByOrderIdsUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [order_item_repository_1.OrderItemRepository])
], GetItemByOrderIdsUseCase);
//# sourceMappingURL=get-item-by-order-ids.usecase.js.map