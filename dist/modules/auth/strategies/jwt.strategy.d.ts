import { Strategy } from 'passport-jwt';
import { AuthParams } from '../domain/params/auth.param';
declare const JsonWebTokenStrategy_base: new (...args: any[]) => InstanceType<typeof Strategy>;
export declare class JsonWebTokenStrategy extends JsonWebTokenStrategy_base {
    constructor();
    validate(payload: AuthParams): Promise<{
        fullName: string;
        phoneNumber: string;
        id: number;
    }>;
}
export {};
