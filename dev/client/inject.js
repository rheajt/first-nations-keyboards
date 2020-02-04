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

// function startTimer(eng, char, target) {
//   clearTimeout(timeout);
//   timeout = setTimeout(() => {
//     target.value =
//       target.value.substring(0, target.value.length - eng.length) + char;
//     str = '';
//     console.log('cleared', str.length);
//   }, 2000);
// }

// function writeChar(char, target) {
//   if (!chars) {
//     target.value = target.value.substring(0, target.value.length - 1);
//   } else {
// target.value =
//   target.value.substring(0, target.value.length - str.length) + char;
//   }
// }

document.addEventListener('keyup', async ({ keyCode, target, ...evt }) => {
  const active = await readStorage();

  if (!active) {
    return;
  }
  // const totalString = target.value;
  const keyHit = String.fromCharCode(keyCode).toLowerCase();
  const calced = languages[active][str + keyHit];

  console.log(str.length);
  /************/

  if (!calced && !str.length) {
    console.log('not calced but no str');
    str += keyHit;
  } else if (calced) {
    str += keyHit;
    console.log(str, calced);
    target.value =
      target.value.substring(0, target.value.length - str.length) + calced;
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
