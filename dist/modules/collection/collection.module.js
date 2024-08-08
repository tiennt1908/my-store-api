"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const collection_entity_1 = require("../../entities/collection.entity");
const get_collection_list_usecase_1 = require("./usecases/get-collection-list.usecase");
const collection_repository_1 = require("./repositories/collection.repository");
const collection_query_1 = require("./queries/collection.query");
const collection_controller_1 = require("./controllers/collection.controller");
let CollectionModule = class CollectionModule {
};
exports.CollectionModule = CollectionModule;
exports.CollectionModule = CollectionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([collection_entity_1.CollectionEntity])],
        providers: [collection_repository_1.CollectionRepository, collection_query_1.CollectionQuery, get_collection_list_usecase_1.GetCollectionListUseCase],
        controllers: [collection_controller_1.CollectionController],
        exports: [],
    })
], CollectionModule);
//# sourceMappingURL=collection.module.js.map