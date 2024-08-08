import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryEntity } from './entities/category.entity';
import { CollectionEntity } from './entities/collection.entity';
import { OrderItemEntity } from './entities/order-item.entity';
import { OrderStatusEntity } from './entities/order-status.entity';
import { OrderEntity } from './entities/order.entity';
import { PermissionEntity } from './entities/permission.entity';
import { ProductCategoryEntity } from './entities/product-category.entity';
import { ProductCollectionEntity } from './entities/product-collection.entity';
import { ProductImageEntity } from './entities/product-image.entity';
import { ProductEntity } from './entities/product.entity';
import { ProductPropertyGroupEntity } from './entities/product-property-group.entity';
import { PropertyEntity } from './entities/property.entity';
import { RolePermissionEntity } from './entities/role-permission';
import { RoleEntity } from './entities/role.entity';
import { UserEntity } from './entities/user.entity';
import { AuthModule } from './modules/auth/auth.module';
import { PropertyItemEntity } from './entities/property-item.entity';
import { CategoryModule } from './modules/category/category.module';
import { ProductModule } from './modules/product/product.module';
import { PropertyValueEntity } from './entities/property-value.entity';
import { CollectionModule } from './modules/collection/collection.module';
import { OrderModule } from './modules/order/order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'store',
      entities: [
        CategoryEntity,
        CollectionEntity,
        OrderItemEntity,
        OrderStatusEntity,
        OrderEntity,
        PermissionEntity,
        ProductCategoryEntity,
        ProductCollectionEntity,
        ProductImageEntity,
        ProductPropertyGroupEntity,
        ProductEntity,
        PropertyItemEntity,
        PropertyEntity,
        PropertyValueEntity,
        RolePermissionEntity,
        RoleEntity,
        UserEntity,
      ],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    AuthModule,
    CategoryModule,
    ProductModule,
    CollectionModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
