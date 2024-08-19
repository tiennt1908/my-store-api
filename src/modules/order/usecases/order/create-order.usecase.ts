import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SQLHelper } from 'src/domain/helpers/sql.helper';
import { ARRAY_UTILS } from 'src/domain/utils/array.utils';
import { IProductPropertyGroup } from 'src/modules/product/domain/outputs/product.output';
import { ProductPropertyGroupQuery } from 'src/modules/product/queries/product-property-group.query';
import { DataSource } from 'typeorm';
import { CreateOrderInput } from '../../domain/inputs/create-order.input';
import { OrderItemQuery } from '../../queries/order-item.query';
import { OrderQuery } from '../../queries/order.query';

@Injectable()
export class CreateOrderUseCase {
  constructor(
    private dataSource: DataSource,
    private readonly orderQuery: OrderQuery,
    private readonly orderItemQuery: OrderItemQuery,
    private readonly productPropertyGroupQuery: ProductPropertyGroupQuery,
  ) {}

  async execute({
    recipientName,
    address,
    phoneNumber,
    userId,
    orderItems,
  }: CreateOrderInput) {
    const query = this.dataSource
      .transaction(async (e) => {
        await e.query(
          this.orderQuery.create({
            recipientName,
            address,
            phoneNumber,
            userId,
            statusId: 1,
          }),
        );
        const [{ lastInsertId }] = await e.query(SQLHelper.getLastInsertId());
        const mapPropertyGroupId = ARRAY_UTILS.toMap(
          orderItems,
          'productPropertyGroupId',
        );
        const uniqueProductPropertyGroupIds = Object.keys(mapPropertyGroupId);
        const productPropertyGroupList: IProductPropertyGroup[] = await e.query(
          this.productPropertyGroupQuery.getProductPropertyGroupByIds(
            uniqueProductPropertyGroupIds,
          ),
        );

        const mapProductPropertyGroupList = ARRAY_UTILS.toMap(
          productPropertyGroupList,
          'id',
        );

        const createItemsInput = [];
        const newProductPropertyGroupList = [];
        orderItems.forEach((e) => {
          const productPropertyGroup =
            mapProductPropertyGroupList[e.productPropertyGroupId];

          createItemsInput.push({
            amount: e.amount,
            price: productPropertyGroup.price,
            finalPrice: productPropertyGroup.isSaleOff
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

        const createItems = await e.query(
          this.orderItemQuery.create(createItemsInput),
        );

        await e.query(
          this.productPropertyGroupQuery.batchUpdate(
            newProductPropertyGroupList,
          ),
        );

        return {
          success: true,
          data: createItems,
        };
      })
      .catch((err) => {
        throw new HttpException(
          {
            success: false,
            data: err.message,
          },
          HttpStatus.BAD_REQUEST,
        );
      });

    return query;
  }
}
