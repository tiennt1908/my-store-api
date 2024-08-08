import { GetUserUseCase } from '../usecases/get-user.usecase';
import { GetUserInput } from '../domain/inputs/get-user.input';
export declare class UserController {
    private readonly getUserUseCase;
    constructor(getUserUseCase: GetUserUseCase);
    get(input: GetUserInput): Promise<{
        success: boolean;
        data: {
            id: any;
            fullName: any;
            phoneNumber: any;
            roleId: any;
        };
    }>;
}
