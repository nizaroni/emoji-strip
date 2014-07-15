var gemoji = require('gemoji'),
    emojiPattern,
    emojiArray,
    emojiRegex
;

function emojiStrip (str) {
    return str.replace(emojiStrip.regex, '');
}

emojiArray = Object.keys(gemoji.unicode);
emojiPattern = '(' + emojiArray.join('|') + ')+';
emojiRegex = new RegExp(emojiPattern, 'g');

emojiStrip.emoji = emojiArray;
emojiStrip.regex = new RegExp(emojiPattern, 'g');

module.exports = emojiStrip;
