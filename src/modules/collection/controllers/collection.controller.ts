import { Controller, Get, Query } from '@nestjs/common';
import { GetCollectionListUseCase } from '../usecases/get-collection-list.usecase';
import { GetCollectionListInput } from '../domain/inputs/get-collection-list.input';

@Controller('api/collections')
export class CollectionController {
  constructor(
    private readonly getCollectionListUseCase: GetCollectionListUseCase,
  ) {}

  @Get()
  async getList(@Query() input: GetCollectionListInput) {
    return await this.getCollectionListUseCase.execute(input);
  }
}
