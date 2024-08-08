import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { AuthenticationGuard } from 'src/modules/auth/guards/auth.guard';
import { UserGuard } from 'src/modules/auth/guards/user.guard';
import { CreateOrderInput } from '../domain/inputs/create-order.input';
import { CreateOrderUseCase } from '../usecases/order/create-order.usecase';
import { GetOrderListInput } from '../domain/inputs/get-order-list.input';
import { GetOrderListUseCase } from '../usecases/order/get-order-list.usecase';
import { GetItemByOrderIdsUseCase } from '../usecases/order-item/get-item-by-order-ids.usecase';
import { GetItemByOrderIdsInput } from '../domain/inputs/get-item-by-order-ids.input';

@Controller('api/orders')
export class OrderController {
  constructor(
    private readonly getOrderListUseCase: GetOrderListUseCase,
    private readonly getItemByOrderIdsUseCase: GetItemByOrderIdsUseCase,
    private readonly createOrderUseCase: CreateOrderUseCase,
  ) {}

  @UseGuards(AuthenticationGuard, UserGuard)
  @Get()
  async getList(@Query() input: GetOrderListInput) {
    return await this.getOrderListUseCase.execute(input);
  }

  @UseGuards(AuthenticationGuard, UserGuard)
  @Post('/items')
  async getItemByOrderIds(@Body() input: GetItemByOrderIdsInput) {
    return await this.getItemByOrderIdsUseCase.execute(input);
  }

  @UseGuards(AuthenticationGuard, UserGuard)
  @Post()
  async create(@Body() input: CreateOrderInput) {
    return this.createOrderUseCase.execute(input);
  }
}
