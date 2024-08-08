"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderQuery = void 0;
const common_1 = require("@nestjs/common");
const sql_helper_1 = require("../../../domain/helpers/sql.helper");
let OrderQuery = class OrderQuery {
    create(input) {
        const q = sql_helper_1.SQLHelper.insert('orders', input);
        return q;
    }
    getList({ userId, statusId, index, limit, sortCol, sortType, }) {
        const q = sql_helper_1.SQLHelper.select({
            table: 'orders',
            cols: ['orders.*', 'os.name statusName'],
            joins: [
                {
                    table: 'order_status os',
                    type: 'INNER JOIN',
                    condition: 'orders.statusId = os.id',
                },
            ],
            where: {
                userId: {
                    compare: '=',
                    value: userId,
                    logic: 'AND',
                },
                statusId: {
                    compare: '=',
                    value: statusId,
                },
            },
            sorts: [
                {
                    col: sortCol,
                    type: sortType,
                },
            ],
            limit: {
                index,
                limit,
            },
        });
        return q;
    }
    getListCount({ userId, statusId }) {
        const q = sql_helper_1.SQLHelper.select({
            table: 'orders',
            cols: ['COUNT(*) AS total'],
            where: {
                userId: {
                    compare: '=',
                    value: userId,
                    logic: 'AND',
                },
                statusId: {
                    compare: '=',
                    value: statusId,
                },
            },
        });
        return q;
    }
};
exports.OrderQuery = OrderQuery;
exports.OrderQuery = OrderQuery = __decorate([
    (0, common_1.Injectable)()
], OrderQuery);
//# sourceMappingURL=order.query.js.map