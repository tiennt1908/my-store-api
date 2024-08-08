import { PagingParams } from 'src/domain/params/common/paging.params';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { UserEntity } from '../../../entities/user.entity';
import { CreateUserParams } from '../domain/params/create-user.params';
import { UpdateUserParams } from '../domain/params/update-user.params';
import { UserQuery } from '../queries/user.query';
import { GetUserParams } from '../domain/params/get-user.params';
export declare class UserRepository {
    private readonly userRepo;
    private readonly q;
    constructor(userRepo: Repository<UserEntity>, q: UserQuery);
    create(params: CreateUserParams): Promise<InsertResult>;
    update(params: UpdateUserParams): Promise<UpdateResult>;
    get(params: GetUserParams): Promise<any>;
    getList(params: PagingParams): Promise<any>;
    getListCount(): Promise<number>;
}
