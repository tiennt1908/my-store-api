import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { OrderRepository } from '../../repositories/order.repository';
import { GetOrderListInput } from '../../domain/inputs/get-order-list.input';

@Injectable()
export class GetOrderListUseCase {
  constructor(private readonly orderRepo: OrderRepository) {}

  async execute(input: GetOrderListInput) {
    try {
      const orderListPromise = this.orderRepo.getList(input);
      const orderListCountPromise = this.orderRepo.getListCount(input);

      const [list, total] = await Promise.all([
        orderListPromise,
        orderListCountPromise,
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
