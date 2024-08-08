import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductImageEntity } from 'src/entities/product-image.entity';
import { Repository } from 'typeorm';
import { IProductImage } from '../domain/outputs/product.output';
import { GetProductParams } from '../domain/params/get-product.param';
import { ProductQuery } from '../queries/product.query';
import { ProductImageQuery } from '../queries/product-image.query';
import { GetProductImagesParams } from '../domain/params/get-product-images.param';

@Injectable()
export class ProductImageRepository {
  constructor(
    @InjectRepository(ProductImageEntity)
    private readonly productRepo: Repository<ProductImageEntity>,
    private readonly q: ProductImageQuery,
  ) {}

  getList(params: GetProductImagesParams): Promise<IProductImage[]> {
    return this.productRepo.query(this.q.getList(params));
  }
}
