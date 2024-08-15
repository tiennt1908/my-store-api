"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductQuery = void 0;
const common_1 = require("@nestjs/common");
const sql_helper_1 = require("../../../domain/helpers/sql.helper");
let ProductQuery = class ProductQuery {
    getList({ index, limit, isSaleOff, searchValue, categoryId, collectionId, sortCol, sortType, }) {
        const q = sql_helper_1.SQLHelper.select({
            table: 'products AS p',
            cols: [
                'p.*',
                `
          CASE 
            WHEN
              p.isSaleOff = 1 
            THEN 
              p.salePrice
            ELSE
              p.price
          END AS salePrice
        `,
                `
          CASE 
            WHEN
              p.isSaleOff = 1 
            THEN 
              COALESCE((p.price - p.salePrice) * 100 / p.price, 0)
            ELSE
              0
          END AS salePercent
        `,
                'MAX(pc.categoryId) AS categoryId',
            ],
            joins: [
                {
                    table: 'product_categories pc',
                    type: 'LEFT JOIN',
                    condition: 'p.id = pc.productId',
                },
                {
                    table: 'product_collection pco',
                    type: 'LEFT JOIN',
                    condition: 'p.id = pco.productId',
                },
            ],
            where: {
                isSaleOff: {
                    compare: '=',
                    value: isSaleOff,
                    logic: 'AND',
                },
                categoryId: {
                    compare: '=',
                    value: categoryId,
                    logic: 'AND',
                },
                collectionId: {
                    compare: '=',
                    value: collectionId,
                    logic: 'AND',
                },
                [searchValue ? 'name' : null]: {
                    compare: 'LIKE',
                    value: searchValue ? `"%${searchValue}%"` : null,
                },
            },
            groupBy: {
                cols: ['p.id'],
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
    getListCount({ isSaleOff, searchValue, categoryId, collectionId, }) {
        const q = sql_helper_1.SQLHelper.select({
            table: 'products AS p',
            cols: ['p.id'],
            joins: [
                {
                    table: 'product_categories pc',
                    type: 'LEFT JOIN',
                    condition: 'p.id = pc.productId',
                },
                {
                    table: 'product_collection pco',
                    type: 'LEFT JOIN',
                    condition: 'p.id = pco.productId',
                },
            ],
            where: {
                isSaleOff: {
                    compare: '=',
                    value: isSaleOff,
                    logic: 'AND',
                },
                categoryId: {
                    compare: '=',
                    value: categoryId,
                    logic: 'AND',
                },
                collectionId: {
                    compare: '=',
                    value: collectionId,
                    logic: 'AND',
                },
                [searchValue ? 'name' : null]: {
                    compare: 'LIKE',
                    value: searchValue ? `"%${searchValue}%"` : null,
                },
            },
            groupBy: {
                cols: ['p.id'],
            },
        });
        const qCount = sql_helper_1.SQLHelper.select({
            table: `(${q}) AS p`,
            cols: ['COUNT(*) as total'],
        });
        return qCount;
    }
    get({ slug }) {
        const q = sql_helper_1.SQLHelper.select({
            table: 'products AS p',
            cols: ['p.*', 'MAX(pc.categoryId) categoryId'],
            joins: [
                {
                    table: 'product_categories pc',
                    type: 'LEFT JOIN',
                    condition: 'p.id = pc.productId',
                },
            ],
            where: {
                slug: {
                    compare: '=',
                    value: `"${slug}"`,
                },
            },
            groupBy: {
                cols: ['p.id'],
            },
        });
        return q;
    }
    batchUpdate(params) {
        const q = sql_helper_1.SQLHelper.batchUpdate('products', params, 'id');
        return q;
    }
};
exports.ProductQuery = ProductQuery;
exports.ProductQuery = ProductQuery = __decorate([
    (0, common_1.Injectable)()
], ProductQuery);
//# sourceMappingURL=product.query.js.map