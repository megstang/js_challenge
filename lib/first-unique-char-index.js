var accumulatorObj = {}
let convert = {}

convert.firstUniqueCharacterIndex = function(string) {
  string.split("").forEach(incrementObj)
  return firstUniqueCharIndex(string)
}

function incrementObj(element){
  if (element in accumulatorObj) {
      accumulatorObj[element] += 1
    } else{
      accumulatorObj[element] = 1
    }
}

function firstUniqueCharIndex(string) {
  for (i = 0; i < string.length; i++) {
    if (accumulatorObj[string[i]] == 1) {
      return i
      break
    }
  }
  return -1
}

module.exports = convert;
