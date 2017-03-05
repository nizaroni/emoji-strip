emoji-strip
===========

Strip emoji from a string in Node.js and browsers.


Examples
--------

```js
var emojiStrip = require('emoji-strip')
var emoji

emoji = 'thumbs-up👍 for staying strong💪 without emoji please🙏'
console.log(emojiStrip(emoji))
// => "thumbs-up for staying strong without emoji please"

emoji = 'dealing with emoji😡 makes me feel like poop💩'
console.log(emojiStrip(emoji))
// => "dealing with emoji makes me feel like poop"
```


API
---

### emojiStrip(string) ###

Returns a copy of `string` with any emoji characters removed.


Supported emoji
---------------

The `emojiStrip` function uses the [`emoji-regex`](https://www.npmjs.org/package/emoji-regex) package behind the scenes. It can remove any of the emoji supported by that package.


Install
-------

Install with [npm](https://www.npmjs.org/):

```
npm install emoji-strip
```


License
-------

ISC
