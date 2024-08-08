import { UserRepository } from 'src/modules/user/repositories/user.repository';
import { LoginInput } from '../domain/inputs/login.input';
import { JwtService } from '@nestjs/jwt';
export declare class LoginUseCase {
    private readonly userRepo;
    private jwtService;
    constructor(userRepo: UserRepository, jwtService: JwtService);
    execute(input: LoginInput): Promise<{
        success: boolean;
        data: {
            accessToken: string;
        };
    }>;
}
