"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQLHelper = exports.SQLKit = void 0;
const object_utils_1 = require("../utils/object.utils");
exports.SQLKit = {
    case: (list, whenField, resultField) => {
        let whens = '';
        list.forEach((e) => {
            const val = e[resultField];
            whens += `WHEN id = ${e[whenField]} THEN ${val} `;
        });
        const cases = `CASE ${whens} END`;
        return cases;
    },
    join: (joins) => {
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
    condition: (input) => {
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
    where: (input, isRemoveWhere) => {
        let whereQuery = exports.SQLKit.condition(input);
        if (whereQuery != '') {
            whereQuery = (isRemoveWhere ? '' : 'WHERE ') + whereQuery;
        }
        return whereQuery;
    },
    alias: (names) => {
        return names.toString();
    },
    limit: (input) => {
        if (!input || !input?.limit) {
            return '';
        }
        return `LIMIT ${input.index || 0}, ${input.limit}`;
    },
    sort: (sorts) => {
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
    groupBy: (input) => {
        if (!input?.cols || input.cols.length === 0) {
            return '';
        }
        let having = '';
        if (input?.having) {
            having = exports.SQLKit.condition(input.having);
        }
        return `GROUP BY ${input.cols.toString()} ${having ? `HAVING ${having}` : ''}`;
    },
};
exports.SQLHelper = {
    batchUpdate: (table, list, primaryColumn) => {
        const primaryColumns = list.map((e) => e[primaryColumn]).toString();
        const fields = Object.keys(list[0])?.filter((e) => e !== primaryColumn);
        const values = fields.map((e) => {
            return `${e} = ${exports.SQLKit.case(list, primaryColumn, e)}`;
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
    batchInsert: (table, list) => {
        const cols = Object.keys(list[0]);
        let values = '';
        list.forEach((e) => {
            const rowData = cols.map((c) => typeof e[c] === 'boolean' ? e[c] : `"${e[c]}"`);
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
    insert: (table, cols) => {
        const clearCols = object_utils_1.OBJ_UTILS.clear(cols);
        const fields = Object.keys(clearCols);
        const rowData = fields.map((c) => typeof clearCols[c] === 'boolean' ? clearCols[c] : `"${clearCols[c]}"`);
        const values = `(${rowData.toString()});`;
        const q = `
      INSERT
      INTO ${table} (${fields.toString()})
      VALUES
      ${values}
    `;
        return q;
    },
    update: (table, cols, primaryColumn) => {
        let primaryVal;
        const clearCols = object_utils_1.OBJ_UTILS.clear(cols);
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
    select: ({ table, cols, where, joins, sorts, limit, groupBy, }) => {
        return `
      SELECT
        ${exports.SQLKit.alias(cols) || '*'}
      FROM
      ${table}
      ${exports.SQLKit.join(joins)}
      ${exports.SQLKit.where(where)}
      ${exports.SQLKit.groupBy(groupBy)}
      ${exports.SQLKit.sort(sorts)}
      ${exports.SQLKit.limit(limit)}
    `;
    },
    freeSelect: (cols, table, afterTable) => {
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
//# sourceMappingURL=sql.helper.js.map