import { Controller, Get, Query } from '@nestjs/common';
import { GetCategoryListInput } from '../domain/inputs/get-category-list.input';
import { GetCategoryListUseCase } from '../usecases/get-category-list.usecase';

@Controller('api/categories')
export class CategoryController {
  constructor(
    private readonly getCategoryListUseCase: GetCategoryListUseCase,
  ) {}

  @Get()
  async getList(@Query() input: GetCategoryListInput) {
    return await this.getCategoryListUseCase.execute(input);
  }
}
