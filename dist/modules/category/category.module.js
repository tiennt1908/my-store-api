"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModule = void 0;
const common_1 = require("@nestjs/common");
const category_controller_1 = require("./controllers/category.controller");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("../../entities/category.entity");
const category_repository_1 = require("./repositories/category.repository");
const category_query_1 = require("./queries/category.query");
const get_category_list_usecase_1 = require("./usecases/get-category-list.usecase");
let CategoryModule = class CategoryModule {
};
exports.CategoryModule = CategoryModule;
exports.CategoryModule = CategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([category_entity_1.CategoryEntity])],
        providers: [category_repository_1.CategoryRepository, category_query_1.CategoryQuery, get_category_list_usecase_1.GetCategoryListUseCase],
        controllers: [category_controller_1.CategoryController],
        exports: [],
    })
], CategoryModule);
//# sourceMappingURL=category.module.js.map