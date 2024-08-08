import { PagingParams } from 'src/domain/params/common/paging.params';
import { UpdateUserParams } from '../domain/params/update-user.params';
import { GetUserParams } from '../domain/params/get-user.params';
import { CreateUserParams } from '../domain/params/create-user.params';
export declare class UserQuery {
    create(params: CreateUserParams): string;
    update(params: UpdateUserParams): string;
    get({ id, phoneNumber }: GetUserParams): string;
    getList(params: PagingParams): string;
    getListCount(): string;
}
