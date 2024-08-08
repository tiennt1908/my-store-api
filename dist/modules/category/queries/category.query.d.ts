import { GetCategoryListParams } from '../domain/params/category.param';
export declare class CategoryQuery {
    getList({ index, limit, parentCategoryId }: GetCategoryListParams): string;
    getListCount({ parentCategoryId }: GetCategoryListParams): string;
}
