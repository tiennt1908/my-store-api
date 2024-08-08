import { GetUserInput } from '../domain/inputs/get-user.input';
import { UserRepository } from '../repositories/user.repository';
export declare class GetUserUseCase {
    private readonly userRepo;
    constructor(userRepo: UserRepository);
    execute(input: GetUserInput): Promise<{
        success: boolean;
        data: {
            id: any;
            fullName: any;
            phoneNumber: any;
            roleId: any;
        };
    }>;
}
