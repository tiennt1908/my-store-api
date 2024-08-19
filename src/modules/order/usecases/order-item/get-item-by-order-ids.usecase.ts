import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GetItemByOrderIdsInput } from '../../domain/inputs/get-item-by-order-ids.input';
import { IOrderDetail, IOrderItemRaw } from '../../domain/outputs/order.output';
import { OrderItemRepository } from '../../repositories/order-item.repository';

@Injectable()
export class GetItemByOrderIdsUseCase {
  constructor(private readonly orderItemRepo: OrderItemRepository) {}

  async execute(input: GetItemByOrderIdsInput) {
    try {
      const orderItemsRaw = await this.orderItemRepo.getItemByOrderIds(input);

      const orderItems: IOrderDetail[] = [];

      orderItemsRaw.forEach((e: IOrderItemRaw) => {
        const index = orderItems.findIndex((o) => o.id === e.orderId);
        if (index === -1) {
          orderItems.push({
            id: e.orderId,
            recipientName: e.recipientName,
            address: e.address,
            phoneNumber: e.phoneNumber,
            createAt: e.createAt,
            statusId: e.statusId,
            statusName: e.statusName,
            items: [
              {
                id: e.id,
                productId: e.productId,
                name: e.name,
                slug: e.slug,
                imageIndex: e.imageIndex,
                price: e.price,
                finalPrice: e.finalPrice,
                amount: e.amount,
                properties: e.propertyId
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
              },
            ],
          });
        } else {
          if (e.propertyId) {
            const itemIndex = orderItems[index].items.findIndex(
              (i) => i.id === e.id,
            );

            if (itemIndex === -1) {
              orderItems[index].items.push({
                id: e.id,
                productId: e.productId,
                name: e.name,
                slug: e.slug,
                imageIndex: e.imageIndex,
                price: e.price,
                finalPrice: e.finalPrice,
                amount: e.amount,
                properties: e.propertyId
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
            } else {
              orderItems[index].items[itemIndex].properties.push({
                id: e.propertyId,
                name: e.propertyName,
                optionSelected: {
                  id: e.propertyValueId,
                  name: e.propertyValueName,
                },
              });
            }
          }
        }
      });

      return {
        success: true,
        data: orderItems,
      };
    } catch (err) {
      throw new HttpException(
        {
          success: false,
          data: err.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
