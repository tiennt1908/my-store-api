import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GetProductPropertyInput } from '../../domain/inputs/get-product-property.input';
import { ProductPropertyRepository } from '../../repositories/product-property.repository';

@Injectable()
export class GetProductPropertyUseCase {
  constructor(
    private readonly productPropertyRepo: ProductPropertyRepository,
  ) {}

  async execute(input: GetProductPropertyInput) {
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
        } else {
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
        } else {
          const opIndex = properties[propIndex].options.findIndex(
            (o) => o?.id === e.propertyValueId,
          );
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
