var gemoji = require('gemoji')

var emojiPattern
var emojiArray
var emojiRegex

function emojiStrip (str) {
  return str.replace(emojiStrip.regex, '')
}

emojiArray = Object.keys(gemoji.unicode)
emojiPattern = '(' + emojiArray.join('|') + ')+'
emojiRegex = new RegExp(emojiPattern, 'g')

emojiStrip.emoji = emojiArray
emojiStrip.regex = emojiRegex

module.exports = emojiStrip
