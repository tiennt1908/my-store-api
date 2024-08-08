"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PASSWORD_HELPER = void 0;
const bcrypt = require('bcrypt');
exports.PASSWORD_HELPER = {
    async hash(password) {
        return await bcrypt.hash(password, 12);
    },
    async compare(password, storePasswordHash) {
        return await bcrypt.compare(password, storePasswordHash);
    },
};
//# sourceMappingURL=password.helper.js.map