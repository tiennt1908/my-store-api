"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductListInput = void 0;
const class_validator_1 = require("class-validator");
const paging_input_1 = require("../../../../domain/inputs/paging.input");
const product_cols_pattern_1 = require("../pattern/product-cols.pattern");
const sort_type_pattern_1 = require("../../../../domain/pattern/sort-type.pattern");
const class_transformer_1 = require("class-transformer");
class GetProductListInput extends paging_input_1.PagingInput {
}
exports.GetProductListInput = GetProductListInput;
__decorate([
    (0, class_validator_1.Matches)(sort_type_pattern_1.SORT_TYPE_PATTERN),
    __metadata("design:type", String)
], GetProductListInput.prototype, "sortType", void 0);
__decorate([
    (0, class_validator_1.Matches)(product_cols_pattern_1.PRODUCT_COLS_PATTERN),
    __metadata("design:type", String)
], GetProductListInput.prototype, "sortCol", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], GetProductListInput.prototype, "categoryId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], GetProductListInput.prototype, "collectionId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Matches)(/0|1/),
    __metadata("design:type", Number)
], GetProductListInput.prototype, "isSaleOff", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 64),
    __metadata("design:type", String)
], GetProductListInput.prototype, "searchValue", void 0);
//# sourceMappingURL=get-product-list.input.js.map