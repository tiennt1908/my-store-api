import { GetProductListUseCase } from '../usecases/products/get-product-list.usecase';
import { GetProductListInput } from '../domain/inputs/get-product-list.input';
import { GetProductInput } from '../domain/inputs/get-product.input';
import { GetProductUseCase } from '../usecases/products/get-product.usecase';
import { GetProductImageListInput } from '../domain/inputs/get-product-image-list.input';
import { GetProductImageListUseCase } from '../usecases/images/get-product-image-list.usecase';
import { GetProductPropertyInput } from '../domain/inputs/get-product-property.input';
import { GetProductPropertyUseCase } from '../usecases/properties/get-product-property.usecase';
import { GetProductPropertyGroupByIdsUseCase } from '../usecases/properties/get-product-property-group-by-ids.usecase';
import { GetProductPropertyGroupByIdsInput } from '../domain/inputs/get-product-property-group-by-ids.input';
import { GetProductCartByPropertyGroupIdsUseCase } from '../usecases/properties/get-product-cart-by-property-group-ids.usecase';
export declare class ProductController {
    private readonly getProductListUseCase;
    private readonly getProductUseCase;
    private readonly getProductImageListUseCase;
    private readonly getProductPropertyUseCase;
    private readonly getProductPropertyGroupByIdsUseCase;
    private readonly getProductCartByPropertyGroupIdsUseCase;
    constructor(getProductListUseCase: GetProductListUseCase, getProductUseCase: GetProductUseCase, getProductImageListUseCase: GetProductImageListUseCase, getProductPropertyUseCase: GetProductPropertyUseCase, getProductPropertyGroupByIdsUseCase: GetProductPropertyGroupByIdsUseCase, getProductCartByPropertyGroupIdsUseCase: GetProductCartByPropertyGroupIdsUseCase);
    getList(input: GetProductListInput): Promise<{
        success: boolean;
        data: {
            total: number;
            list: import("../domain/outputs/product.output").IProduct[];
        };
    }>;
    get(input: GetProductInput): Promise<{
        success: boolean;
        data: any;
    }>;
    getProductImageList(input: GetProductImageListInput): Promise<{
        success: boolean;
        data: import("../domain/outputs/product.output").IProductImage[];
    }>;
    getProductPropertyList(input: GetProductPropertyInput): Promise<{
        success: boolean;
        data: {
            properties: any[];
            optionGroup: any[];
        };
    }>;
    getProductPropertyGroupByIds(input: GetProductPropertyGroupByIdsInput): Promise<{
        success: boolean;
        data: any;
    }>;
    getProductCartByPropertyGroupIds(input: GetProductPropertyGroupByIdsInput): Promise<{
        success: boolean;
        data: any[];
    }>;
}
