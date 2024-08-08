"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARRAY_UTILS = void 0;
exports.ARRAY_UTILS = {
    toMap: (list, field) => {
        const length = list.length;
        let i = 0;
        const result = {};
        for (i = 0; i < length; i++) {
            const key = list[i][field];
            result[key] = list[i];
        }
        return result;
    },
    toMapList: (list, field) => {
        const length = list.length;
        let i = 0;
        const result = {};
        for (i = 0; i < length; i++) {
            const key = list[i][field];
            if (result[key]) {
                result[key].push(list[i]);
            }
            else {
                result[key] = [list[i]];
            }
        }
        return result;
    },
};
//# sourceMappingURL=array.utils.js.map