import { CollectionRepository } from '../repositories/collection.repository';
import { GetCollectionListInput } from '../domain/inputs/get-collection-list.input';
export declare class GetCollectionListUseCase {
    private readonly collectionRepo;
    constructor(collectionRepo: CollectionRepository);
    execute(input: GetCollectionListInput): Promise<{
        success: boolean;
        data: {
            total: number;
            list: import("../domain/outputs/collection.output").ICollection[];
        };
    }>;
}
