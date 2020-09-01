class Storage {
  constructor(typeStorage = 'local') {
    this.storage =
      window[`${typeStorage}Storage`]; /* eslint-disable-line no-undef */
  }

  setItem = (key, value) => {
    const item = JSON.stringify(value);
    try {
      this.storage.setItem(key, item);
    } catch (e) {
      // continue regardless of error
    }
  };

  getItem = key => {
    const itemJson = this.storage.getItem(key);

    if (!itemJson) {
      return null;
    }

    return JSON.parse(itemJson);
  };

  clear = key => this.storage.removeItem(key);

  clearAll = () => {
    Object.keys(this.storage).forEach(key => {
      this.storage.removeItem(key);
    });
  };
}

const local = new Storage('local');
const session = new Storage('session');

export {local, session};
