import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from 'src/entities/order.entity';
import { OrderController } from './controllers/order.controller';
import { OrderQuery } from './queries/order.query';
import { OrderItemQuery } from './queries/order-item.query';
import { ProductModule } from '../product/product.module';
import { CreateOrderUseCase } from './usecases/order/create-order.usecase';
import { GetOrderListUseCase } from './usecases/order/get-order-list.usecase';
import { GetItemByOrderIdsUseCase } from './usecases/order-item/get-item-by-order-ids.usecase';
import { OrderItemEntity } from 'src/entities/order-item.entity';
import { OrderRepository } from './repositories/order.repository';
import { OrderItemRepository } from './repositories/order-item.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity, OrderItemEntity]),
    ProductModule,
  ],
  providers: [
    OrderQuery,
    OrderItemQuery,
    OrderRepository,
    OrderItemRepository,
    CreateOrderUseCase,
    GetOrderListUseCase,
    GetItemByOrderIdsUseCase,
  ],
  controllers: [OrderController],
  exports: [],
})
export class OrderModule {}
