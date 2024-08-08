import { GetCategoryListInput } from '../domain/inputs/get-category-list.input';
import { CategoryRepository } from '../repositories/category.repository';
export declare class GetCategoryListUseCase {
    private readonly categoryRepo;
    constructor(categoryRepo: CategoryRepository);
    execute(input: GetCategoryListInput): Promise<{
        success: boolean;
        data: {
            total: number;
            list: import("../domain/outputs/category.output").ICategory[];
        };
    }>;
}
