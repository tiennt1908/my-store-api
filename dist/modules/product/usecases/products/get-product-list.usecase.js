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
exports.GetProductListUseCase = void 0;
const common_1 = require("@nestjs/common");
const product_repository_1 = require("../../repositories/product.repository");
let GetProductListUseCase = class GetProductListUseCase {
    constructor(productRepo) {
        this.productRepo = productRepo;
    }
    async execute(input) {
        try {
            const productListPromise = this.productRepo.getList(input);
            const productListCountPromise = this.productRepo.getListCount(input);
            const [list, total] = await Promise.all([
                productListPromise,
                productListCountPromise,
            ]);
            return {
                success: true,
                data: {
                    total,
                    list,
                },
            };
        }
        catch (err) {
            throw new common_1.HttpException({
                success: false,
                data: err.message,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.GetProductListUseCase = GetProductListUseCase;
exports.GetProductListUseCase = GetProductListUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_repository_1.ProductRepository])
], GetProductListUseCase);
//# sourceMappingURL=get-product-list.usecase.js.map