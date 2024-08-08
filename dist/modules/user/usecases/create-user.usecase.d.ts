import { UserRepository } from '../repositories/user.repository';
import { CreateUserInput } from '../domain/inputs/create-user.input';
export declare class CreateUserUseCase {
    private readonly userRepo;
    constructor(userRepo: UserRepository);
    execute(input: CreateUserInput): Promise<{
        success: boolean;
        data: import("typeorm").InsertResult;
    }>;
}
