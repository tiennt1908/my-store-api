import { GetProductPropertyGroupByIdsInput } from '../../domain/inputs/get-product-property-group-by-ids.input';
import { ProductPropertyRepository } from '../../repositories/product-property.repository';
export declare class GetProductCartByPropertyGroupIdsUseCase {
    private readonly productPropertyRepo;
    constructor(productPropertyRepo: ProductPropertyRepository);
    execute(input: GetProductPropertyGroupByIdsInput): Promise<{
        success: boolean;
        data: any[];
    }>;
}
