import { AuthenticationUseCase } from '../usecases/authentication.usecase';
import { UserEntity } from 'src/entities/user.entity';
import { Strategy } from 'passport-local';
import { RegisterInput } from '../domain/inputs/register.input';
declare const LocalStrategy_base: new (...args: any[]) => InstanceType<typeof Strategy>;
export declare class LocalStrategy extends LocalStrategy_base {
    private authenticationUseCase;
    constructor(authenticationUseCase: AuthenticationUseCase);
    validate(input: RegisterInput): Promise<UserEntity>;
}
export {};
