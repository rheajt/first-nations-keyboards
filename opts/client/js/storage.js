export default class Storage {
  static save(key, val) {
    // const installed = languages
    //   .filter(lang => lang.installed)
    //   .map(lang => lang.name);

    if (process.env.NODE_ENV === 'production') {
      chrome.storage.sync.set({ [key]: val }, function() {
        console.log('Value is set');
      });
    }
  }

  static read(keys = ['languages']) {
    if (process.env.NODE_ENV === 'production') {
      chrome.storage.sync.get(keys, function(result) {
        return result;
      });
    } else {
      return { languages: ['ojibwe'] };
    }
  }
}
