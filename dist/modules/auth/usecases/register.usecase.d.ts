import { UserRepository } from 'src/modules/user/repositories/user.repository';
import { RegisterInput } from '../domain/inputs/register.input';
export declare class RegisterUseCase {
    private readonly userRepo;
    constructor(userRepo: UserRepository);
    execute(input: RegisterInput): Promise<{
        success: boolean;
        data: {
            fullName: string;
            phoneNumber: string;
            roleId: number;
        };
    }>;
}
