import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectionEntity } from 'src/entities/collection.entity';
import { GetCollectionListUseCase } from './usecases/get-collection-list.usecase';
import { CollectionRepository } from './repositories/collection.repository';
import { CollectionQuery } from './queries/collection.query';
import { CollectionController } from './controllers/collection.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CollectionEntity])],
  providers: [CollectionRepository, CollectionQuery, GetCollectionListUseCase],
  controllers: [CollectionController],
  exports: [],
})
export class CollectionModule {}
