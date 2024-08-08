import { CategoryEntity } from 'src/entities/category.entity';
import { CategoryQuery } from '../queries/category.query';
import { ICategory } from '../domain/outputs/category.output';
import { Repository } from 'typeorm';
import { GetCategoryListParams } from '../domain/params/category.param';
export declare class CategoryRepository {
    private readonly categoryRepo;
    private readonly q;
    constructor(categoryRepo: Repository<CategoryEntity>, q: CategoryQuery);
    getList(params: GetCategoryListParams): Promise<ICategory[]>;
    getListCount(params: GetCategoryListParams): Promise<number>;
}
