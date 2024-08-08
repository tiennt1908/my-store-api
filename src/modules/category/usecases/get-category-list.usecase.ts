import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GetCategoryListInput } from '../domain/inputs/get-category-list.input';
import { CategoryRepository } from '../repositories/category.repository';

@Injectable()
export class GetCategoryListUseCase {
  constructor(private readonly categoryRepo: CategoryRepository) {}

  async execute(input: GetCategoryListInput) {
    try {
      const cateogryListPromise = this.categoryRepo.getList(input);
      const categoryListCountPromise = this.categoryRepo.getListCount(input);

      const [list, total] = await Promise.all([
        cateogryListPromise,
        categoryListCountPromise,
      ]);

      return {
        success: true,
        data: {
          total,
          list,
        },
      };
    } catch (err) {
      throw new HttpException(
        {
          success: false,
          data: err.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
