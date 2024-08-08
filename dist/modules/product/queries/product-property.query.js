"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPropertyQuery = void 0;
const common_1 = require("@nestjs/common");
const sql_helper_1 = require("../../../domain/helpers/sql.helper");
let ProductPropertyQuery = class ProductPropertyQuery {
    get({ productId }) {
        const q = sql_helper_1.SQLHelper.select({
            table: 'product_property_group AS ppg',
            cols: [
                'ppg.id',
                'ppg.totalSupply',
                'ppg.productId',
                'prop.id propertyId',
                'prop.name propertyName',
                'pi.propertyValueId',
                'pv.value propertyValue',
            ],
            joins: [
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
                    table: 'properties prop',
                    type: 'LEFT JOIN',
                    condition: 'pv.propertyId = prop.id',
                },
            ],
            where: {
                productId: {
                    compare: '=',
                    value: productId,
                },
            },
        });
        return q;
    }
};
exports.ProductPropertyQuery = ProductPropertyQuery;
exports.ProductPropertyQuery = ProductPropertyQuery = __decorate([
    (0, common_1.Injectable)()
], ProductPropertyQuery);
//# sourceMappingURL=product-property.query.js.map