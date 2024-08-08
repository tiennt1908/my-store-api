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
exports.GetProductCartByPropertyGroupIdsUseCase = void 0;
const common_1 = require("@nestjs/common");
const product_property_repository_1 = require("../../repositories/product-property.repository");
let GetProductCartByPropertyGroupIdsUseCase = class GetProductCartByPropertyGroupIdsUseCase {
    constructor(productPropertyRepo) {
        this.productPropertyRepo = productPropertyRepo;
    }
    async execute(input) {
        try {
            const productCarts = await this.productPropertyRepo.getProductCartByPropertyGroupIds(input.ids);
            let products = [];
            productCarts.forEach((e) => {
                const index = products.findIndex((p) => p.id === e.id);
                if (index === -1) {
                    products.push({
                        id: e.id,
                        totalSupply: e.totalSupply,
                        productId: e.productId,
                        slug: e.slug,
                        name: e.name,
                        imageIndex: e.imageIndex,
                        price: e.price,
                        salePrice: e.salePrice,
                        isSaleOff: e.isSaleOff,
                        properties: e?.propertyId
                            ? [
                                {
                                    id: e.propertyId,
                                    name: e.propertyName,
                                    optionSelected: {
                                        id: e.propertyValueId,
                                        name: e.propertyValueName,
                                    },
                                },
                            ]
                            : [],
                    });
                }
                else {
                    products[index].properties.push({
                        id: e.propertyId,
                        name: e.propertyName,
                        optionSelected: {
                            id: e.propertyValueId,
                            name: e.propertyValueName,
                        },
                    });
                }
            });
            return {
                success: true,
                data: products,
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
exports.GetProductCartByPropertyGroupIdsUseCase = GetProductCartByPropertyGroupIdsUseCase;
exports.GetProductCartByPropertyGroupIdsUseCase = GetProductCartByPropertyGroupIdsUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_property_repository_1.ProductPropertyRepository])
], GetProductCartByPropertyGroupIdsUseCase);
//# sourceMappingURL=get-product-cart-by-property-group-ids.usecase.js.map