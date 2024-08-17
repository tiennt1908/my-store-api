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
exports.CreateOrderUseCase = void 0;
const common_1 = require("@nestjs/common");
const sql_helper_1 = require("../../../../domain/helpers/sql.helper");
const array_utils_1 = require("../../../../domain/utils/array.utils");
const product_property_group_query_1 = require("../../../product/queries/product-property-group.query");
const typeorm_1 = require("typeorm");
const order_item_query_1 = require("../../queries/order-item.query");
const order_query_1 = require("../../queries/order.query");
let CreateOrderUseCase = class CreateOrderUseCase {
    constructor(dataSource, orderQuery, orderItemQuery, productPropertyGroupQuery) {
        this.dataSource = dataSource;
        this.orderQuery = orderQuery;
        this.orderItemQuery = orderItemQuery;
        this.productPropertyGroupQuery = productPropertyGroupQuery;
    }
    async execute({ recipientName, address, phoneNumber, userId, orderItems, }) {
        const query = this.dataSource
            .transaction(async (e) => {
            await e.query(this.orderQuery.create({
                recipientName,
                address,
                phoneNumber,
                userId,
                statusId: 1,
            }));
            const [{ lastInsertId }] = await e.query(sql_helper_1.SQLHelper.getLastInsertId());
            const mapPropertyGroupId = array_utils_1.ARRAY_UTILS.toMap(orderItems, 'productPropertyGroupId');
            const uniqueProductPropertyGroupIds = Object.keys(mapPropertyGroupId);
            const productPropertyGroupList = await e.query(this.productPropertyGroupQuery.getProductPropertyGroupByIds(uniqueProductPropertyGroupIds));
            const mapProductPropertyGroupList = array_utils_1.ARRAY_UTILS.toMap(productPropertyGroupList, 'id');
            const createItemsInput = [];
            const newProductPropertyGroupList = [];
            orderItems.forEach((e) => {
                const productPropertyGroup = mapProductPropertyGroupList[e.productPropertyGroupId];
                createItemsInput.push({
                    amount: e.amount,
                    price: productPropertyGroup.isSaleOff
                        ? productPropertyGroup.salePrice
                        : productPropertyGroup.price,
                    orderId: lastInsertId,
                    productPropertyGroupId: e.productPropertyGroupId,
                });
                const newSupply = productPropertyGroup.totalSupply - e.amount;
                if (newSupply < 0) {
                    throw Error('Nguồn cung không đủ');
                }
                newProductPropertyGroupList.push({
                    id: productPropertyGroup.id,
                    totalSupply: newSupply,
                });
            });
            const createItems = await e.query(this.orderItemQuery.create(createItemsInput));
            await e.query(this.productPropertyGroupQuery.batchUpdate(newProductPropertyGroupList));
            return {
                success: true,
                data: createItems,
            };
        })
            .catch((err) => {
            throw new common_1.HttpException({
                success: false,
                data: err.message,
            }, common_1.HttpStatus.BAD_REQUEST);
        });
        return query;
    }
};
exports.CreateOrderUseCase = CreateOrderUseCase;
exports.CreateOrderUseCase = CreateOrderUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource,
        order_query_1.OrderQuery,
        order_item_query_1.OrderItemQuery,
        product_property_group_query_1.ProductPropertyGroupQuery])
], CreateOrderUseCase);
//# sourceMappingURL=create-order.usecase.js.map