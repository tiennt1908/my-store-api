import { CollectionEntity } from 'src/entities/collection.entity';
import { Repository } from 'typeorm';
import { CollectionQuery } from '../queries/collection.query';
import { GetCollectionListParams } from '../domain/params/get-collection-list.param';
import { ICollection } from '../domain/outputs/collection.output';
export declare class CollectionRepository {
    private readonly collectionRepo;
    private readonly q;
    constructor(collectionRepo: Repository<CollectionEntity>, q: CollectionQuery);
    getList(params: GetCollectionListParams): Promise<ICollection[]>;
    getListCount(params: GetCollectionListParams): Promise<number>;
}
