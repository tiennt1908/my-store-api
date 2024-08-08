import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { GetProductListUseCase } from '../usecases/products/get-product-list.usecase';
import { GetProductListInput } from '../domain/inputs/get-product-list.input';
import { GetProductInput } from '../domain/inputs/get-product.input';
import { GetProductUseCase } from '../usecases/products/get-product.usecase';
import { GetProductImageListInput } from '../domain/inputs/get-product-image-list.input';
import { GetProductImageListUseCase } from '../usecases/images/get-product-image-list.usecase';
import { GetProductPropertyInput } from '../domain/inputs/get-product-property.input';
import { GetProductPropertyUseCase } from '../usecases/properties/get-product-property.usecase';
import { GetProductPropertyGroupByIdsUseCase } from '../usecases/properties/get-product-property-group-by-ids.usecase';
import { GetProductPropertyGroupByIdsInput } from '../domain/inputs/get-product-property-group-by-ids.input';
import { GetProductCartByPropertyGroupIdsUseCase } from '../usecases/properties/get-product-cart-by-property-group-ids.usecase';

@Controller('api/products')
export class ProductController {
  constructor(
    private readonly getProductListUseCase: GetProductListUseCase,
    private readonly getProductUseCase: GetProductUseCase,
    private readonly getProductImageListUseCase: GetProductImageListUseCase,
    private readonly getProductPropertyUseCase: GetProductPropertyUseCase,
    private readonly getProductPropertyGroupByIdsUseCase: GetProductPropertyGroupByIdsUseCase,
    private readonly getProductCartByPropertyGroupIdsUseCase: GetProductCartByPropertyGroupIdsUseCase,
  ) {}

  @Get()
  async getList(@Query() input: GetProductListInput) {
    return await this.getProductListUseCase.execute(input);
  }

  @Get('/detail')
  async get(@Query() input: GetProductInput) {
    return await this.getProductUseCase.execute(input);
  }

  @Get('/images')
  async getProductImageList(@Query() input: GetProductImageListInput) {
    return await this.getProductImageListUseCase.execute(input);
  }

  @Get('/properties')
  async getProductPropertyList(@Query() input: GetProductPropertyInput) {
    return await this.getProductPropertyUseCase.execute(input);
  }

  @Get('/property-group')
  async getProductPropertyGroupByIds(
    @Query() input: GetProductPropertyGroupByIdsInput,
  ) {
    return await this.getProductPropertyGroupByIdsUseCase.execute(input);
  }

  @Post('/cart')
  async getProductCartByPropertyGroupIds(
    @Body() input: GetProductPropertyGroupByIdsInput,
  ) {
    return await this.getProductCartByPropertyGroupIdsUseCase.execute(input);
  }
}
