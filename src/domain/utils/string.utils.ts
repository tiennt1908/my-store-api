export const STRING_UTILS = {
  random: (length: number): string => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  },
  compare: {
    lowerCase: (a: string, b: string) => {
      return a.toLowerCase() === b.toLowerCase();
    },
    exact: (a: string, b: string) => {
      return a === b;
    },
  },
};
