import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/entities/product.entity';
import { Repository } from 'typeorm';
import { ProductQuery } from '../queries/product.query';
import { GetProductListParams } from '../domain/params/get-product-list.param';
import { IProduct, IProductImage } from '../domain/outputs/product.output';
import { GetProductParams } from '../domain/params/get-product.param';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepo: Repository<ProductEntity>,
    private readonly q: ProductQuery,
  ) {}

  getList(params: GetProductListParams): Promise<IProduct[]> {
    return this.productRepo.query(this.q.getList(params));
  }

  async getListCount(params: GetProductListParams): Promise<number> {
    const total =
      ((await this.productRepo.query(this.q.getListCount(params)))?.[0]
        ?.total || 0) * 1;

    return total;
  }

  get(params: GetProductParams): Promise<IProduct> {
    return this.productRepo.query(this.q.get(params));
  }
}
