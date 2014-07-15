var tape = require('tape'),
    emojiStrip = require('..'),
    emoji
;

tape('strip emoji', function (t) {
    emoji = 'thumbs-up👍 for staying strong💪 without emoji please🙏';
    t.equal(emojiStrip(emoji), 'thumbs-up for staying strong without emoji please');

    emoji = 'dealing with emoji😡 makes me feel like poop💩';
    t.equal(emojiStrip(emoji), 'dealing with emoji makes me feel like poop');
    t.end();
});
