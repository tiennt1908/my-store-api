import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GetProductPropertyGroupByIdsInput } from '../../domain/inputs/get-product-property-group-by-ids.input';
import { ProductPropertyRepository } from '../../repositories/product-property.repository';

@Injectable()
export class GetProductPropertyGroupByIdsUseCase {
  constructor(
    private readonly productPropertyRepo: ProductPropertyRepository,
  ) {}

  async execute(input: GetProductPropertyGroupByIdsInput) {
    try {
      const productPropertyGroup =
        await this.productPropertyRepo.getProductPropertyGroupByIds(input.ids);

      return {
        success: true,
        data: productPropertyGroup,
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
