var a = {}
let convert = {}

convert.firstUniqueCharacterIndex = function(string) {
  string.split("").forEach(element =>
    {if (element in a) {
        a[element] += 1
      } else{
        a[element] = 1
      }})
  return firstUniqueCharIndex(string)
}


function  firstUniqueCharIndex(string) {
  for (i = 0; i < string.length; i++) {
    if (a[string[i]] == 1) {
      return i
      break
    }
  }
  return -1
}

module.exports = convert;
