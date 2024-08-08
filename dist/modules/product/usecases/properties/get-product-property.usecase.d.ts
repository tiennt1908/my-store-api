import { GetProductPropertyInput } from '../../domain/inputs/get-product-property.input';
import { ProductPropertyRepository } from '../../repositories/product-property.repository';
export declare class GetProductPropertyUseCase {
    private readonly productPropertyRepo;
    constructor(productPropertyRepo: ProductPropertyRepository);
    execute(input: GetProductPropertyInput): Promise<{
        success: boolean;
        data: {
            properties: any[];
            optionGroup: any[];
        };
    }>;
}
