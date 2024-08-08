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
exports.GetProductPropertyUseCase = void 0;
const common_1 = require("@nestjs/common");
const product_property_repository_1 = require("../../repositories/product-property.repository");
let GetProductPropertyUseCase = class GetProductPropertyUseCase {
    constructor(productPropertyRepo) {
        this.productPropertyRepo = productPropertyRepo;
    }
    async execute(input) {
        try {
            const productProperties = await this.productPropertyRepo.getList(input);
            const properties = [];
            const optionGroup = [];
            productProperties.forEach((e) => {
                const propIndex = properties.findIndex((p) => p.id === e.propertyId);
                const optionGroupIndex = optionGroup.findIndex((og) => og.id === e.id);
                if (optionGroupIndex === -1) {
                    optionGroup.push({
                        id: e.id,
                        amount: e.totalSupply,
                        options: e?.propertyId
                            ? [
                                {
                                    id: e.propertyId,
                                    valueId: e.propertyValueId,
                                },
                            ]
                            : [],
                    });
                }
                else {
                    optionGroup[optionGroupIndex].options.push({
                        id: e.propertyId,
                        valueId: e.propertyValueId,
                    });
                }
                if (propIndex === -1) {
                    if (e?.propertyId) {
                        properties.push({
                            id: e.propertyId,
                            name: e.propertyName,
                            options: [
                                {
                                    id: e.propertyValueId,
                                    value: e.propertyValue,
                                },
                            ],
                        });
                    }
                }
                else {
                    const opIndex = properties[propIndex].options.findIndex((o) => o?.id === e.propertyValueId);
                    if (opIndex === -1) {
                        properties[propIndex].options.push({
                            id: e.propertyValueId,
                            value: e.propertyValue,
                        });
                    }
                }
            });
            return {
                success: true,
                data: {
                    properties,
                    optionGroup,
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
exports.GetProductPropertyUseCase = GetProductPropertyUseCase;
exports.GetProductPropertyUseCase = GetProductPropertyUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_property_repository_1.ProductPropertyRepository])
], GetProductPropertyUseCase);
//# sourceMappingURL=get-product-property.usecase.js.map