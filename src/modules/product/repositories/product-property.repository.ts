import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductPropertyGroupEntity } from 'src/entities/product-property-group.entity';
import { Repository } from 'typeorm';
import { IProductPropertyElement } from '../domain/outputs/product.output';
import { GetProductPropertyParams } from '../domain/params/get-product-property.param';
import { ProductPropertyQuery } from '../queries/product-property.query';
import { ProductPropertyGroupQuery } from '../queries/product-property-group.query';

@Injectable()
export class ProductPropertyRepository {
  constructor(
    @InjectRepository(ProductPropertyGroupEntity)
    private readonly productPropertyGroupRepo: Repository<ProductPropertyGroupEntity>,
    private readonly q: ProductPropertyQuery,
    private readonly ppg: ProductPropertyGroupQuery,
  ) {}

  getList(
    params: GetProductPropertyParams,
  ): Promise<IProductPropertyElement[]> {
    return this.productPropertyGroupRepo.query(this.q.get(params));
  }

  getProductPropertyGroupByIds(ids: number[] | string[]) {
    return this.productPropertyGroupRepo.query(
      this.ppg.getProductPropertyGroupByIds(ids),
    );
  }

  getProductCartByPropertyGroupIds(ids: number[] | string[]) {
    return this.productPropertyGroupRepo.query(
      this.ppg.getProductCartByPropertyGroupIds(ids),
    );
  }
}
