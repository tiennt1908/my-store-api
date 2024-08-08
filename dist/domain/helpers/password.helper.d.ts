export declare const PASSWORD_HELPER: {
    hash(password: string): Promise<string>;
    compare(password: string, storePasswordHash: string): Promise<any>;
};
