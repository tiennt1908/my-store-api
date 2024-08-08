import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CollectionEntity } from 'src/entities/collection.entity';
import { ProductEntity } from 'src/entities/product.entity';
import { Repository } from 'typeorm';
import { CollectionQuery } from '../queries/collection.query';
import { GetCollectionListParams } from '../domain/params/get-collection-list.param';
import { ICollection } from '../domain/outputs/collection.output';
@Injectable()
export class CollectionRepository {
  constructor(
    @InjectRepository(CollectionEntity)
    private readonly collectionRepo: Repository<CollectionEntity>,
    private readonly q: CollectionQuery,
  ) {}

  getList(params: GetCollectionListParams): Promise<ICollection[]> {
    return this.collectionRepo.query(this.q.getList(params));
  }

  async getListCount(params: GetCollectionListParams): Promise<number> {
    const total =
      ((await this.collectionRepo.query(this.q.getListCount(params)))?.[0]
        ?.total || 0) * 1;

    return total;
  }
}
