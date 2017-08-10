var regexCreator = require('emoji-regex');

var emojiRegex = regexCreator();

function emoji_strip (string) {
  return string.replace(emojiRegex, '');
}

module.exports = emoji_strip;
