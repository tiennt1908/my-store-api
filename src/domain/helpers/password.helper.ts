const bcrypt = require('bcrypt');

export const PASSWORD_HELPER = {
  async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, 12);
  },
  async compare(password: string, storePasswordHash: string): Promise<any> {
    return await bcrypt.compare(password, storePasswordHash);
  },
};
