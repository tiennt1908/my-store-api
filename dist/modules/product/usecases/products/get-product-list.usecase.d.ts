import { ProductRepository } from '../../repositories/product.repository';
import { GetProductListInput } from '../../domain/inputs/get-product-list.input';
export declare class GetProductListUseCase {
    private readonly productRepo;
    constructor(productRepo: ProductRepository);
    execute(input: GetProductListInput): Promise<{
        success: boolean;
        data: {
            total: number;
            list: import("../../domain/outputs/product.output").IProduct[];
        };
    }>;
}
