import { RegisterInput } from '../domain/inputs/register.input';
import { RegisterUseCase } from '../usecases/register.usecase';
import { LoginInput } from '../domain/inputs/login.input';
import { LoginUseCase } from '../usecases/login.usecase';
export declare class AuthController {
    private readonly registerUseCase;
    private readonly loginUseCase;
    constructor(registerUseCase: RegisterUseCase, loginUseCase: LoginUseCase);
    register(input: RegisterInput): Promise<{
        success: boolean;
        data: {
            fullName: string;
            phoneNumber: string;
            roleId: number;
        };
    }>;
    login(input: LoginInput): Promise<{
        success: boolean;
        data: {
            accessToken: string;
        };
    }>;
}
