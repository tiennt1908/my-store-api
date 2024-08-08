import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'src/entities/product.entity';
import { ProductController } from './controllers/product.controller';
import { GetProductListUseCase } from './usecases/products/get-product-list.usecase';
import { ProductRepository } from './repositories/product.repository';
import { ProductQuery } from './queries/product.query';
import { GetProductUseCase } from './usecases/products/get-product.usecase';
import { GetProductImageListUseCase } from './usecases/images/get-product-image-list.usecase';
import { ProductImageRepository } from './repositories/product-image.repository';
import { ProductImageQuery } from './queries/product-image.query';
import { ProductImageEntity } from 'src/entities/product-image.entity';
import { GetProductPropertyUseCase } from './usecases/properties/get-product-property.usecase';
import { ProductPropertyRepository } from './repositories/product-property.repository';
import { ProductPropertyGroupEntity } from 'src/entities/product-property-group.entity';
import { ProductPropertyQuery } from './queries/product-property.query';
import { ProductPropertyGroupQuery } from './queries/product-property-group.query';
import { GetProductPropertyGroupByIdsUseCase } from './usecases/properties/get-product-property-group-by-ids.usecase';
import { GetProductCartByPropertyGroupIdsUseCase } from './usecases/properties/get-product-cart-by-property-group-ids.usecase';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductEntity,
      ProductImageEntity,
      ProductPropertyGroupEntity,
    ]),
  ],
  providers: [
    ProductRepository,
    ProductQuery,
    GetProductListUseCase,
    GetProductUseCase,
    ProductImageRepository,
    ProductImageQuery,
    GetProductImageListUseCase,
    ProductPropertyRepository,
    GetProductPropertyUseCase,
    GetProductPropertyGroupByIdsUseCase,
    GetProductCartByPropertyGroupIdsUseCase,
    ProductPropertyQuery,
    ProductPropertyGroupQuery,
  ],
  controllers: [ProductController],
  exports: [ProductPropertyGroupQuery],
})
export class ProductModule {}
