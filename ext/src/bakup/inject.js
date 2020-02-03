console.log('**inject.js**');

document.addEventListener('keyup', ({ keyCode, target, ...evt }) => {
  // if (active && !validTypes.includes(target.type)) {
  //   return;
  // }
  const keyHit = String.fromCharCode(keyCode).toLowerCase();
  // const calced = languages['ojibwe'][keyHit];
  // if (!calced) return;
  target.value += 'boom';
});
/*
chrome.extension.sendMessage('hello', function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === 'complete') {
      clearInterval(readyStateCheckInterval);

      document.addEventListener('keyup', ({ keyCode, target, ...evt }) => {
        if (active && !validTypes.includes(target.type)) {
          return;
        }
        const keyHit = String.fromCharCode(keyCode).toLowerCase();
        const calced = languages['ojibwe'][keyHit];
        if (!calced) return;
        target.value += languages['ojibwe'][keyHit];
      });
    }
  }, 10);
});
*/
