emoji-strip
===========

Strip emoji from a string in Node.js and browsers.


Examples
--------

```js
var emojiStrip = require('emoji-strip'),
    emoji
;

emoji = 'thumbs-up👍 for staying strong💪 without emoji please🙏';
console.log(emojiStrip(emoji));
// => "thumbs-up for staying strong without emoji please"

emoji = 'dealing with emoji😡 makes me feel like poop💩';
console.log(emojiStrip(emoji));
// => "dealing with emoji makes me feel like poop"
```


API
---

### emojiStrip(str) ###

Returns a copy of `str` with any emoji characters removed.


Supported emoji
---------------

The `emojiStrip` function is capable of removing any emoji that the [`gemoji`](https://www.npmjs.org/package/gemoji) package supports. You can see the list in `gemoji`'s [Supported Gemoji document](https://github.com/wooorm/gemoji/blob/master/Supported-Gemoji.md).


Install
-------

Install with [npm](https://www.npmjs.org/):

```
npm install emoji-strip
```


License
-------

ISC
