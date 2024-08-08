export declare const ARRAY_UTILS: {
    toMap: <T>(list: T[], field: string) => {
        [key: string | number]: T;
    };
    toMapList: <T>(list: T[], field: string) => {
        [key: string | number]: T[];
    };
};
