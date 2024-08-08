import { GetCategoryListInput } from '../domain/inputs/get-category-list.input';
import { GetCategoryListUseCase } from '../usecases/get-category-list.usecase';
export declare class CategoryController {
    private readonly getCategoryListUseCase;
    constructor(getCategoryListUseCase: GetCategoryListUseCase);
    getList(input: GetCategoryListInput): Promise<{
        success: boolean;
        data: {
            total: number;
            list: import("../domain/outputs/category.output").ICategory[];
        };
    }>;
}
