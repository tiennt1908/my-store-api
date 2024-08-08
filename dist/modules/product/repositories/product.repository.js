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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("../../../entities/product.entity");
const typeorm_2 = require("typeorm");
const product_query_1 = require("../queries/product.query");
let ProductRepository = class ProductRepository {
    constructor(productRepo, q) {
        this.productRepo = productRepo;
        this.q = q;
    }
    getList(params) {
        return this.productRepo.query(this.q.getList(params));
    }
    async getListCount(params) {
        const total = ((await this.productRepo.query(this.q.getListCount(params)))?.[0]
            ?.total || 0) * 1;
        return total;
    }
    get(params) {
        return this.productRepo.query(this.q.get(params));
    }
};
exports.ProductRepository = ProductRepository;
exports.ProductRepository = ProductRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.ProductEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        product_query_1.ProductQuery])
], ProductRepository);
//# sourceMappingURL=product.repository.js.map