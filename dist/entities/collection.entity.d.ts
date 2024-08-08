import { ProductCollectionEntity } from './product-collection.entity';
export declare class CollectionEntity {
    id: number;
    name: string;
    slug: string;
    desc: string;
    img: string;
    isActive: boolean;
    products: ProductCollectionEntity[];
}
