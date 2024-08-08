import { Module } from '@nestjs/common';
import { CategoryController } from './controllers/category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/entities/category.entity';
import { CategoryRepository } from './repositories/category.repository';
import { CategoryQuery } from './queries/category.query';
import { GetCategoryListUseCase } from './usecases/get-category-list.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  providers: [CategoryRepository, CategoryQuery, GetCategoryListUseCase],
  controllers: [CategoryController],
  exports: [],
})
export class CategoryModule {}
