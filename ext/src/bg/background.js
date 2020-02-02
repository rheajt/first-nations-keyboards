// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

console.log('background.js');

//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  chrome.storage.sync.get(['languages', 'active'], resp => {
    console.log(resp);
  });
  chrome.pageAction.show(sender.tab.id);
  sendResponse();
});
