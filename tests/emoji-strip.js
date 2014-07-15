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

tape('don’t magically remove digits', function (t) {
    emoji = '9999 ways to die🔫 in the west';
    t.equal(emojiStrip(emoji), '9999 ways to die in the west');

    emoji = '⚡zero 0 🐗one 1 🐴two 2 🐋three 3 🎃four 4 🍌five 5 🍻six 6 💣seven 7 🍪eight 8 eight emoji ah ah ah';
    t.equal(emojiStrip(emoji), 'zero 0 one 1 two 2 three 3 four 4 five 5 six 6 seven 7 eight 8 eight emoji ah ah ah');
    t.end();
});
