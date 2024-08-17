"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemQuery = void 0;
const common_1 = require("@nestjs/common");
const sql_helper_1 = require("../../../domain/helpers/sql.helper");
let OrderItemQuery = class OrderItemQuery {
    create(input) {
        const q = sql_helper_1.SQLHelper.batchInsert('order_items', input);
        return q;
    }
    getItemByOrderIds({ userId, ids }) {
        const q = sql_helper_1.SQLHelper.select({
            table: 'order_items oi',
            cols: [
                'oi.id',
                'orders.id orderId',
                'orders.recipientName recipientName',
                'orders.phoneNumber',
                'orders.address',
                'orders.createAt',
                'orders.statusId',
                'os.name statusName',
                'p.id productId',
                'p.name',
                'p.slug',
                'p.imageIndex',
                'p.price',
                'oi.price priceAtOrder',
                'oi.amount',
                'p.isSaleOff',
                'pv.id propertyValueId',
                'pv.value propertyValueName',
                'properties.id propertyId',
                'properties.name propertyName',
            ],
            joins: [
                {
                    table: 'orders',
                    type: 'INNER JOIN',
                    condition: 'oi.orderId = orders.id',
                },
                {
                    table: 'order_status os',
                    type: 'INNER JOIN',
                    condition: 'orders.statusId = os.id',
                },
                {
                    table: 'product_property_group ppg',
                    type: 'INNER JOIN',
                    condition: 'oi.productPropertyGroupId = ppg.id',
                },
                {
                    table: 'products p',
                    type: 'INNER JOIN',
                    condition: 'ppg.productId = p.id',
                },
                {
                    table: 'property_items pi',
                    type: 'LEFT JOIN',
                    condition: 'ppg.id = pi.propertyGroupId',
                },
                {
                    table: 'property_values pv',
                    type: 'LEFT JOIN',
                    condition: 'pi.propertyValueId = pv.id',
                },
                {
                    table: 'properties',
                    type: 'LEFT JOIN',
                    condition: 'pv.propertyId = properties.id',
                },
            ],
            where: {
                userId: {
                    compare: '=',
                    value: userId,
                    logic: 'AND',
                },
                orderId: {
                    compare: 'IN',
                    value: `(${ids.toString()})`,
                },
            },
        });
        return q;
    }
};
exports.OrderItemQuery = OrderItemQuery;
exports.OrderItemQuery = OrderItemQuery = __decorate([
    (0, common_1.Injectable)()
], OrderItemQuery);
//# sourceMappingURL=order-item.query.js.map