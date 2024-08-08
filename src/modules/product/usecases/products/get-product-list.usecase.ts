import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProductRepository } from '../../repositories/product.repository';
import { GetProductListInput } from '../../domain/inputs/get-product-list.input';

@Injectable()
export class GetProductListUseCase {
  constructor(private readonly productRepo: ProductRepository) {}

  async execute(input: GetProductListInput) {
    try {
      const productListPromise = this.productRepo.getList(input);
      const productListCountPromise = this.productRepo.getListCount(input);

      const [list, total] = await Promise.all([
        productListPromise,
        productListCountPromise,
      ]);

      return {
        success: true,
        data: {
          total,
          list,
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
