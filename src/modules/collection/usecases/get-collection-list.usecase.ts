import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CollectionRepository } from '../repositories/collection.repository';
import { GetCollectionListInput } from '../domain/inputs/get-collection-list.input';

@Injectable()
export class GetCollectionListUseCase {
  constructor(private readonly collectionRepo: CollectionRepository) {}

  async execute(input: GetCollectionListInput) {
    try {
      const collectionListPromise = this.collectionRepo.getList(input);
      const collectionListCountPromise =
        this.collectionRepo.getListCount(input);

      const [list, total] = await Promise.all([
        collectionListPromise,
        collectionListCountPromise,
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
