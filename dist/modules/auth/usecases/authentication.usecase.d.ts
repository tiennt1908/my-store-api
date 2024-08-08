import { UserRepository } from 'src/modules/user/repositories/user.repository';
export declare class AuthenticationUseCase {
    private readonly userRepo;
    constructor(userRepo: UserRepository);
    execute(phoneNumber: string, password: string): Promise<any>;
}
