import { ProductCategoryEntity } from './product-category.entity';
export declare class CategoryEntity {
    id: number;
    name: string;
    slug: string;
    parentCategory: CategoryEntity;
    childCategories: CategoryEntity[];
    products: ProductCategoryEntity[];
}
