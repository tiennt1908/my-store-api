import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/entities/category.entity';
import { CategoryQuery } from '../queries/category.query';
import { PagingParams } from 'src/domain/params/common/paging.params';
import { ICategory } from '../domain/outputs/category.output';
import { Repository } from 'typeorm';
import { GetCategoryListParams } from '../domain/params/category.param';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepo: Repository<CategoryEntity>,
    private readonly q: CategoryQuery,
  ) {}

  getList(params: GetCategoryListParams): Promise<ICategory[]> {
    return this.categoryRepo.query(this.q.getList(params));
  }

  async getListCount(params: GetCategoryListParams): Promise<number> {
    const total =
      ((await this.categoryRepo.query(this.q.getListCount(params)))?.[0]
        ?.total || 0) * 1;

    return total;
  }
}
