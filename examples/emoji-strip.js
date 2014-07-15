var emojiStrip = require('..'),
    emoji
;

emoji = 'thumbs-up👍 for staying strong💪 without emoji please🙏';
console.log(emojiStrip(emoji));
// => "thumbs-up for staying strong without emoji please"

emoji = 'dealing with emoji😡 makes me feel like poop💩';
console.log(emojiStrip(emoji));
// => "dealing with emoji makes me feel like poop"
