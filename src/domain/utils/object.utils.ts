export const OBJ_UTILS = {
  compare: {
    useStringify: (a: object, b: object): boolean => {
      return JSON.stringify(a) === JSON.stringify(b);
    },
  },
  clear: <T>(obj: T) => {
    const keys = Object.keys(obj);
    keys.forEach((e: string) => {
      if (e === 'undefined' || (obj[e] != 0 && !obj[e])) {
        delete obj[e];
      }
    });
    return obj;
  },
};
