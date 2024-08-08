import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GetProductPropertyGroupByIdsInput } from '../../domain/inputs/get-product-property-group-by-ids.input';
import { ProductPropertyRepository } from '../../repositories/product-property.repository';

@Injectable()
export class GetProductCartByPropertyGroupIdsUseCase {
  constructor(
    private readonly productPropertyRepo: ProductPropertyRepository,
  ) {}

  async execute(input: GetProductPropertyGroupByIdsInput) {
    try {
      const productCarts: any[] =
        await this.productPropertyRepo.getProductCartByPropertyGroupIds(
          input.ids,
        );

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
        } else {
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
