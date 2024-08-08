import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GetProductInput } from '../../domain/inputs/get-product.input';
import { ProductRepository } from '../../repositories/product.repository';

@Injectable()
export class GetProductUseCase {
  constructor(private readonly productRepo: ProductRepository) {}

  async execute(input: GetProductInput) {
    try {
      const products = await this.productRepo.get(input);

      return {
        success: true,
        data: products[0],
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
