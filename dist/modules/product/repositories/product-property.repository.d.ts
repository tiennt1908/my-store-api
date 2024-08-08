import { ProductPropertyGroupEntity } from 'src/entities/product-property-group.entity';
import { Repository } from 'typeorm';
import { IProductPropertyElement } from '../domain/outputs/product.output';
import { GetProductPropertyParams } from '../domain/params/get-product-property.param';
import { ProductPropertyQuery } from '../queries/product-property.query';
import { ProductPropertyGroupQuery } from '../queries/product-property-group.query';
export declare class ProductPropertyRepository {
    private readonly productPropertyGroupRepo;
    private readonly q;
    private readonly ppg;
    constructor(productPropertyGroupRepo: Repository<ProductPropertyGroupEntity>, q: ProductPropertyQuery, ppg: ProductPropertyGroupQuery);
    getList(params: GetProductPropertyParams): Promise<IProductPropertyElement[]>;
    getProductPropertyGroupByIds(ids: number[] | string[]): Promise<any>;
    getProductCartByPropertyGroupIds(ids: number[] | string[]): Promise<any>;
}
