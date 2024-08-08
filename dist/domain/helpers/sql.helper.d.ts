import { SortType } from '../constants/type.constant';
type ConditionType = {
    [key: string]: {
        compare: string;
        logic?: string;
        value: string | number;
    };
};
type JoinType = {
    type: string;
    table: string;
    condition: string;
};
type LimitType = {
    index?: number;
    limit?: number;
};
type SelectType = {
    cols: string[];
    table: string;
    where?: ConditionType;
    joins?: JoinType[];
    sorts?: TSort[];
    limit?: LimitType;
    groupBy?: GroupByType;
};
type TSort = {
    col: string;
    type: SortType;
};
type GroupByType = {
    cols: string[];
    having?: ConditionType;
};
export declare const SQLKit: {
    case: <T>(list: T[], whenField: string, resultField: string) => string;
    join: (joins: JoinType[]) => string;
    condition: (input: ConditionType) => string;
    where: (input: ConditionType, isRemoveWhere?: boolean) => string;
    alias: (names: string[]) => string;
    limit: (input: LimitType) => string;
    sort: (sorts: TSort[]) => string;
    groupBy: (input: GroupByType) => string;
};
export declare const SQLHelper: {
    batchUpdate: <T>(table: string, list: T[], primaryColumn: string) => string;
    batchInsert: <T>(table: string, list: T[]) => string;
    insert: <T>(table: string, cols: T) => string;
    update: <T>(table: string, cols: T, primaryColumn: string) => string;
    select: ({ table, cols, where, joins, sorts, limit, groupBy, }: SelectType) => string;
    freeSelect: (cols: string, table: string, afterTable: string[]) => string;
    getLastInsertId: () => string;
};
export {};
