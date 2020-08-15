let convert = {}

convert.reverseWordsInASentence = function(sentence) {
  var reversedString = ""
  sentence.split(" ").forEach(
    element => reversedString = reversedString.concat(reverseThisWord(element), " ")
  )
  return reversedString.trim()
}

function reverseThisWord(word){
  return word.split("").reverse().join("")
}

module.exports = convert;
