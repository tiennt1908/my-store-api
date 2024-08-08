"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryQuery = void 0;
const common_1 = require("@nestjs/common");
const sql_helper_1 = require("../../../domain/helpers/sql.helper");
let CategoryQuery = class CategoryQuery {
    getList({ index, limit, parentCategoryId }) {
        const q = sql_helper_1.SQLHelper.select({
            table: 'categories',
            cols: ['*'],
            where: {
                parentCategoryId: {
                    compare: parentCategoryId === 0 ? 'IS' : '=',
                    value: parentCategoryId === 0 ? 'NULL' : parentCategoryId,
                },
            },
            limit: {
                index,
                limit,
            },
        });
        return q;
    }
    getListCount({ parentCategoryId }) {
        const q = sql_helper_1.SQLHelper.select({
            table: 'categories',
            cols: ['COUNT(*) as total'],
            where: {
                parentCategoryId: {
                    compare: parentCategoryId === 0 ? 'IS' : '=',
                    value: parentCategoryId === 0 ? 'NULL' : parentCategoryId,
                },
            },
        });
        return q;
    }
};
exports.CategoryQuery = CategoryQuery;
exports.CategoryQuery = CategoryQuery = __decorate([
    (0, common_1.Injectable)()
], CategoryQuery);
//# sourceMappingURL=category.query.js.map