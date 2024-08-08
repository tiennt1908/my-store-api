import { GetProductImageListInput } from '../../domain/inputs/get-product-image-list.input';
import { ProductImageRepository } from '../../repositories/product-image.repository';
export declare class GetProductImageListUseCase {
    private readonly productImageRepo;
    constructor(productImageRepo: ProductImageRepository);
    execute(input: GetProductImageListInput): Promise<{
        success: boolean;
        data: import("../../domain/outputs/product.output").IProductImage[];
    }>;
}
