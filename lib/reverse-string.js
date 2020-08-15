let convert = {}

convert.reverseWordsInASentence = function(sentence) {
  var reversedString = ""
  sentence.split(" ").forEach(
    element => reversedString = reversedString
    .concat(element.split("").reverse().join(""), " ")
  )
  return reversedString.trim()
}

module.exports = convert;
