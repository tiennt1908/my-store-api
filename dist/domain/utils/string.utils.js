"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STRING_UTILS = void 0;
exports.STRING_UTILS = {
    random: (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    },
    compare: {
        lowerCase: (a, b) => {
            return a.toLowerCase() === b.toLowerCase();
        },
        exact: (a, b) => {
            return a === b;
        },
    },
};
//# sourceMappingURL=string.utils.js.map