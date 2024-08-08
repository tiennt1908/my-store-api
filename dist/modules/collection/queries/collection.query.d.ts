import { GetCollectionListParams } from '../domain/params/get-collection-list.param';
export declare class CollectionQuery {
    getList({ index, limit, isActive }: GetCollectionListParams): string;
    getListCount({ isActive }: GetCollectionListParams): string;
}
