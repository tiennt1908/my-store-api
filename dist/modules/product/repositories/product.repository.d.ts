import { ProductEntity } from 'src/entities/product.entity';
import { Repository } from 'typeorm';
import { ProductQuery } from '../queries/product.query';
import { GetProductListParams } from '../domain/params/get-product-list.param';
import { IProduct } from '../domain/outputs/product.output';
import { GetProductParams } from '../domain/params/get-product.param';
export declare class ProductRepository {
    private readonly productRepo;
    private readonly q;
    constructor(productRepo: Repository<ProductEntity>, q: ProductQuery);
    getList(params: GetProductListParams): Promise<IProduct[]>;
    getListCount(params: GetProductListParams): Promise<number>;
    get(params: GetProductParams): Promise<IProduct>;
}
