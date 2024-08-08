"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPropertyGroupQuery = void 0;
const common_1 = require("@nestjs/common");
const sql_helper_1 = require("../../../domain/helpers/sql.helper");
let ProductPropertyGroupQuery = class ProductPropertyGroupQuery {
    getProductPropertyGroupByIds(ids) {
        const q = sql_helper_1.SQLHelper.select({
            table: 'product_property_group ppg',
            cols: ['p.price', 'p.salePrice', 'p.isSaleOff', 'ppg.*'],
            joins: [
                {
                    table: 'products p',
                    type: 'INNER JOIN',
                    condition: 'productId = p.id',
                },
            ],
            where: {
                ['ppg.id']: {
                    compare: 'IN',
                    value: `(${ids.toString()})`,
                },
            },
        });
        return q;
    }
    batchUpdate(params) {
        const q = sql_helper_1.SQLHelper.batchUpdate('product_property_group', params, 'id');
        return q;
    }
    getProductCartByPropertyGroupIds(ids) {
        const q = sql_helper_1.SQLHelper.select({
            table: 'product_property_group ppg',
            cols: [
                'ppg.*',
                'p.name',
                'p.slug',
                'p.imageIndex',
                'p.price',
                'p.salePrice',
                'p.isSaleOff',
                'pv.id propertyValueId',
                'pv.value propertyValueName',
                'properties.id propertyId',
                'properties.name propertyName',
            ],
            joins: [
                {
                    table: 'products p',
                    type: 'INNER JOIN',
                    condition: 'productId = p.id',
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
                ['ppg.id']: {
                    compare: 'IN',
                    value: `(${ids.toString()})`,
                },
            },
        });
        return q;
    }
};
exports.ProductPropertyGroupQuery = ProductPropertyGroupQuery;
exports.ProductPropertyGroupQuery = ProductPropertyGroupQuery = __decorate([
    (0, common_1.Injectable)()
], ProductPropertyGroupQuery);
//# sourceMappingURL=product-property-group.query.js.map