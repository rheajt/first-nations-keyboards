# custom language keyboards

layout will always be lower case

- work in conjunction with google input tools

  - can you turn on and off by clicking on the extension icon
  - turns off when you navigate away from the element

- works with text input and textarea

#junk
"background": {
"page": "src/bg/background.js",
"persistent": false
},

,
"content_scripts": [
{
"matches": ["<all_urls>"],
"js": ["src/inject/inject.js"]
}
]
