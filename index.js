var regexCreator = require('emoji-regex');

var emojiRegex = emojiRegex();

function emoji_strip (string) {
    return string.replace(emojiRegex, "").replace(/^\s+|\s+$|\s+(?=\s)/g, "");
}

module.exports = emoji_strip;
