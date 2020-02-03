export default class Storage {
  static save(key, val) {
    // const installed = languages
    //   .filter(lang => lang.installed)
    //   .map(lang => lang.name);

    if (process.env.NODE_ENV === 'production') {
      chrome.storage.sync.set({ [key]: val }, function() {
        console.log('set: ', key, val);
      });
    }
  }

  static read(keys = ['languages']) {
    if (process.env.NODE_ENV === 'production') {
      return new Promise(resolve => {
        chrome.storage.sync.get(keys, function(result) {
          console.log(result);
          resolve(result);
        });
      });
    } else {
      return { languages: ['ojibwe'] };
    }
  }
}
