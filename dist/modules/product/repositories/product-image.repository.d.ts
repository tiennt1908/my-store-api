import { ProductImageEntity } from 'src/entities/product-image.entity';
import { Repository } from 'typeorm';
import { IProductImage } from '../domain/outputs/product.output';
import { ProductImageQuery } from '../queries/product-image.query';
import { GetProductImagesParams } from '../domain/params/get-product-images.param';
export declare class ProductImageRepository {
    private readonly productRepo;
    private readonly q;
    constructor(productRepo: Repository<ProductImageEntity>, q: ProductImageQuery);
    getList(params: GetProductImagesParams): Promise<IProductImage[]>;
}
