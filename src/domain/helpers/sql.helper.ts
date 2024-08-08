import { SortType } from '../constants/type.constant';
import { OBJ_UTILS } from '../utils/object.utils';

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

export const SQLKit = {
  case: <T>(list: T[], whenField: string, resultField: string) => {
    let whens = '';

    list.forEach((e) => {
      const val = e[resultField];
      whens += `WHEN id = ${e[whenField]} THEN ${val} `;
    });

    const cases = `CASE ${whens} END`;

    return cases;
  },
  join: (joins: JoinType[]) => {
    if (!joins || joins.length === 0) {
      return '';
    }

    let joinQuery = '';
    joins.forEach((j) => {
      joinQuery += `
        ${j.type} 
        ${j.table}
        ON
        ${j.condition}
        
      `;
    });

    return joinQuery;
  },
  condition: (input: ConditionType) => {
    if (!input) {
      return '';
    }

    const keys = Object.keys(input);
    let conditionQuery = '';
    let logic = '';

    keys.forEach((key) => {
      const c = input[key];
      if (c.value || c.value === 0) {
        conditionQuery += ` ${logic ? logic : ''} ${key} ${c.compare} ${c.value}`;
        logic = c.logic;
      }
    });

    return conditionQuery;
  },
  where: (input: ConditionType, isRemoveWhere?: boolean) => {
    let whereQuery = SQLKit.condition(input);

    if (whereQuery != '') {
      whereQuery = (isRemoveWhere ? '' : 'WHERE ') + whereQuery;
    }

    return whereQuery;
  },
  alias: (names: string[]) => {
    return names.toString();
  },
  limit: (input: LimitType) => {
    if (!input || !input?.limit) {
      return '';
    }
    return `LIMIT ${input.index || 0}, ${input.limit}`;
  },
  sort: (sorts: TSort[]) => {
    if (!sorts || sorts.length === 0) {
      return '';
    }
    let sortQuery = '';
    sorts.forEach((s) => {
      sortQuery += `${s.col} ${s.type},`;
    });
    sortQuery = sortQuery.slice(0, -1);
    return `ORDER BY ${sortQuery}`;
  },
  groupBy: (input: GroupByType) => {
    if (!input?.cols || input.cols.length === 0) {
      return '';
    }

    let having = '';
    if (input?.having) {
      having = SQLKit.condition(input.having);
    }

    return `GROUP BY ${input.cols.toString()} ${having ? `HAVING ${having}` : ''}`;
  },
};
export const SQLHelper = {
  batchUpdate: <T>(table: string, list: T[], primaryColumn: string) => {
    const primaryColumns = list.map((e) => e[primaryColumn]).toString();
    const fields = Object.keys(list[0])?.filter((e) => e !== primaryColumn);

    const values = fields.map((e) => {
      return `${e} = ${SQLKit.case<T>(list, primaryColumn, e)}`;
    });

    const q = `
      UPDATE
          ${table}
      SET
          ${values}
      WHERE
          ${primaryColumn} IN(${primaryColumns})
    `;

    return q;
  },
  batchInsert: <T>(table: string, list: T[]) => {
    const cols = Object.keys(list[0]);
    let values = '';

    list.forEach((e) => {
      const rowData = cols.map((c) =>
        typeof e[c] === 'boolean' ? e[c] : `"${e[c]}"`,
      );
      values += `(${rowData.toString()}),`;
    });

    values = values.slice(0, -1);

    const q = `
      INSERT
      INTO ${table} (${cols.toString()})
      VALUES
      ${values}
    `;

    return q;
  },
  insert: <T>(table: string, cols: T) => {
    const clearCols = OBJ_UTILS.clear<T>(cols);
    const fields = Object.keys(clearCols);
    const rowData = fields.map((c) =>
      typeof clearCols[c] === 'boolean' ? clearCols[c] : `"${clearCols[c]}"`,
    );
    const values = `(${rowData.toString()});`;

    const q = `
      INSERT
      INTO ${table} (${fields.toString()})
      VALUES
      ${values}
    `;

    return q;
  },
  update: <T>(table: string, cols: T, primaryColumn: string) => {
    let primaryVal: any;

    const clearCols = OBJ_UTILS.clear<T>(cols);
    const fields = Object.keys(clearCols);

    let values = fields.map((e) => {
      if (primaryColumn === e) {
        primaryVal = clearCols[e];
      }
      return `${e} = ${clearCols[e]}`;
    });

    const setValue = values.toString();

    const q = `
      UPDATE
        ${table}
      SET
        ${setValue}
      WHERE
        ${primaryColumn} = ${primaryVal}
    `;

    return q;
  },
  select: ({
    table,
    cols,
    where,
    joins,
    sorts,
    limit,
    groupBy,
  }: SelectType) => {
    return `
      SELECT
        ${SQLKit.alias(cols) || '*'}
      FROM
      ${table}
      ${SQLKit.join(joins)}
      ${SQLKit.where(where)}
      ${SQLKit.groupBy(groupBy)}
      ${SQLKit.sort(sorts)}
      ${SQLKit.limit(limit)}
    `;
  },
  freeSelect: (cols: string, table: string, afterTable: string[]) => {
    return `
    SELECT
      ${cols}
    FROM
      ${table}
      ${afterTable.join(' ')}
  `;
  },
  getLastInsertId: () => {
    return `SELECT LAST_INSERT_ID() lastInsertId`;
  },
};
