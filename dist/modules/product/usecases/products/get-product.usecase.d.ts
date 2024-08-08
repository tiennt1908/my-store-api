import { GetProductInput } from '../../domain/inputs/get-product.input';
import { ProductRepository } from '../../repositories/product.repository';
export declare class GetProductUseCase {
    private readonly productRepo;
    constructor(productRepo: ProductRepository);
    execute(input: GetProductInput): Promise<{
        success: boolean;
        data: any;
    }>;
}
