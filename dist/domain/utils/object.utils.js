"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OBJ_UTILS = void 0;
exports.OBJ_UTILS = {
    compare: {
        useStringify: (a, b) => {
            return JSON.stringify(a) === JSON.stringify(b);
        },
    },
    clear: (obj) => {
        const keys = Object.keys(obj);
        keys.forEach((e) => {
            if (e === 'undefined' || (obj[e] != 0 && !obj[e])) {
                delete obj[e];
            }
        });
        return obj;
    },
};
//# sourceMappingURL=object.utils.js.map