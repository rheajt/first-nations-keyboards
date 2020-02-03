import languages from '../../languages';

console.log('**inject.js**', languages['ojibwe'].baa);
let timeout;
let str = '';

async function readStorage() {
  return new Promise(resolve => {
    chrome.storage.sync.get(['active'], resp => {
      resolve(resp.active);
    });
  });
}

function startTimer(eng, char, target) {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    target.value =
      target.value.substring(0, target.value.length - eng.length) + char;
    str = '';
    console.log('cleared', str.length);
  }, 2000);
}

function writeChar(char, target) {
  if (!chars) {
    target.value = target.value.substring(0, target.value.length - 1);
  } else {
    target.value =
      target.value.substring(0, target.value.length - str.length) + char;
  }
}

document.addEventListener('keyup', async ({ keyCode, target, ...evt }) => {
  const active = await readStorage();

  if (!active) {
    return;
  }

  const keyHit = String.fromCharCode(keyCode).toLowerCase();
  console.log(str + keyHit);
  const calced = languages[active][str + keyHit];

  /************/
  if (calced) {
    str += keyHit;
    startTimer(str, calced, target);
  } else {
    console.log('doesnt match', str, calced);
    str = '';
  }

  // startTimer(calced, target);
  /***********/

  // if (!calced) {
  //   target.value = target.value.substring(0, target.value.length - 1);
  //   return;
  // }

  // target.value = target.value.substring(0, target.value.length - 1) + calced;
});
