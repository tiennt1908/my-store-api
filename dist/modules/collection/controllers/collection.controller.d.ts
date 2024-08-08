import { GetCollectionListUseCase } from '../usecases/get-collection-list.usecase';
import { GetCollectionListInput } from '../domain/inputs/get-collection-list.input';
export declare class CollectionController {
    private readonly getCollectionListUseCase;
    constructor(getCollectionListUseCase: GetCollectionListUseCase);
    getList(input: GetCollectionListInput): Promise<{
        success: boolean;
        data: {
            total: number;
            list: import("../domain/outputs/collection.output").ICollection[];
        };
    }>;
}
