"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionQuery = void 0;
const common_1 = require("@nestjs/common");
const sql_helper_1 = require("../../../domain/helpers/sql.helper");
let CollectionQuery = class CollectionQuery {
    getList({ index, limit, isActive }) {
        const q = sql_helper_1.SQLHelper.select({
            table: 'collection c',
            cols: ['*'],
            where: {
                isActive: {
                    compare: '=',
                    value: isActive,
                },
            },
            limit: {
                index,
                limit,
            },
        });
        return q;
    }
    getListCount({ isActive }) {
        const q = sql_helper_1.SQLHelper.select({
            table: 'collection c',
            cols: ['COUNT(*) AS total'],
            where: {
                isActive: {
                    compare: '=',
                    value: isActive,
                },
            },
        });
        return q;
    }
};
exports.CollectionQuery = CollectionQuery;
exports.CollectionQuery = CollectionQuery = __decorate([
    (0, common_1.Injectable)()
], CollectionQuery);
//# sourceMappingURL=collection.query.js.map