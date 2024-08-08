"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserQuery = void 0;
const common_1 = require("@nestjs/common");
const sql_helper_1 = require("../../../domain/helpers/sql.helper");
let UserQuery = class UserQuery {
    create(params) {
        const q = sql_helper_1.SQLHelper.insert('users', params);
        return q;
    }
    update(params) {
        const q = sql_helper_1.SQLHelper.update('users', params, 'id');
        return q;
    }
    get({ id, phoneNumber }) {
        const q = sql_helper_1.SQLHelper.select({
            table: 'users',
            cols: ['*'],
            where: {
                id: {
                    value: id,
                    compare: '=',
                    logic: 'OR',
                },
                phoneNumber: {
                    value: phoneNumber,
                    compare: '=',
                },
            },
        });
        return q;
    }
    getList(params) {
        const q = sql_helper_1.SQLHelper.select({
            table: 'users',
            cols: ['*'],
            limit: params,
        });
        return q;
    }
    getListCount() {
        const q = sql_helper_1.SQLHelper.select({
            table: 'users',
            cols: ['COUNT(*) total'],
        });
        return q;
    }
};
exports.UserQuery = UserQuery;
exports.UserQuery = UserQuery = __decorate([
    (0, common_1.Injectable)()
], UserQuery);
//# sourceMappingURL=user.query.js.map