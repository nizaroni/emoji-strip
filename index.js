var regexCreator = require('emoji-regex')

var emojiRegex = regexCreator()

function emojiStrip (string) {
  return string.replace(emojiRegex, '')
}

module.exports = emojiStrip
