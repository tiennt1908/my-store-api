import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GetProductImageListInput } from '../../domain/inputs/get-product-image-list.input';
import { ProductImageRepository } from '../../repositories/product-image.repository';

@Injectable()
export class GetProductImageListUseCase {
  constructor(private readonly productImageRepo: ProductImageRepository) {}

  async execute(input: GetProductImageListInput) {
    try {
      const productImageList = await this.productImageRepo.getList(input);

      return {
        success: true,
        data: productImageList,
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
