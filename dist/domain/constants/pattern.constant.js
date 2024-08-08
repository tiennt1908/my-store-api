"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PATTERN = void 0;
exports.PATTERN = {
    name: /^[A-Za-z0-9]+([\s][A-Za-z0-9]+)*$/,
    search: /^[A-Za-z0-9:.;!@#$%^&_-]+([\s][A-Za-z0-9:.;!@#$%^&_-]+)*$/,
    symbol: /^[A-Za-z0-9]+$/,
    imgURL: /^(http(s)?:\/\/)([a-zA-z0-9]+(-)?[a-zA-z0-9]+\.)+([a-zA-z0-9]+)(\/[a-zA-z0-9]+)*([a-zA-z0-9]+(-?)[a-zA-z0-9]+\.(png|jpe?g|webp)){1}$/,
    domain: /^(http(s)?:\/\/)([a-zA-z0-9]+(-)?[a-zA-z0-9]+\.)+([a-zA-z0-9]+)$/,
    fullURL: /^(http(s)?:\/\/)([a-zA-z0-9]+(-)?[a-zA-z0-9]+\.)+([a-zA-z0-9]+)(\?[a-zA-z0-9]+\=[a-zA-z0-9]+)?(\/[a-zA-z0-9]+)*$/,
    number: /^[0-9]+$/,
    address: /^0x[a-fA-F0-9]{40}$/,
    hex: /^0x[a-fA-F0-9]+$/,
    sort: /^(DESC|desc|ASC|asc)$/,
    isDecimalNumber: /^[0-9]{1,}\.?[0-9]{0,18}$/,
    boolean: /^(true|false|TRUE|FALSE)$/,
};
//# sourceMappingURL=pattern.constant.js.map