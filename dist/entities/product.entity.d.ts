import { ProductCategoryEntity } from './product-category.entity';
import { ProductCollectionEntity } from './product-collection.entity';
import { ProductPropertyGroupEntity } from './product-property-group.entity';
import { ProductImageEntity } from './product-image.entity';
export declare class ProductEntity {
    id: number;
    name: string;
    slug: string;
    desc: string;
    imageIndex: number;
    price: number;
    salePrice: number;
    totalSold: number;
    isSaleOff: boolean;
    createAt: number;
    categories: ProductCategoryEntity[];
    collections: ProductCollectionEntity[];
    propertyGroupList: ProductPropertyGroupEntity[];
    productImages: ProductImageEntity[];
}
