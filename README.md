emoji-strip
===========

Use [`emoji-regex`](https://github.com/mathiasbynens/emoji-regex)
to Strip emoji from a string in Node.js and browsers.


Examples
--------

```js
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

The `emojiStrip` function uses
the [`emoji-regex`](https://www.npmjs.org/package/emoji-regex) package
behind the scenes.
It can remove any of the emoji supported by that package.

Currently, it supports all emoji up to
[Unicode Version 10](http://emojipedia.org/unicode-10.0/)
except for emoji sequences.


Install
-------

### For Node.js ###

Install with [npm](https://www.npmjs.org/):
```bash
npm install --save emoji-strip
```

Require it in your program:
```js
var emojiStrip = require('emoji-strip')
```

### For browsers ###

Download one of the versions of `emoji-strip.js`:
- [emoji-strip.js](https://raw.githubusercontent.com/khalifenizar/emoji-strip/master/dist/emoji-strip.js) (uncompressed)
- [emoji-strip.min.js](https://raw.githubusercontent.com/khalifenizar/emoji-strip/master/dist/emoji-strip.min.js) (minified)

Link it in your HTML:
```html
<script src="emoji-strip.min.js"></script>
```


License
-------

ISC
