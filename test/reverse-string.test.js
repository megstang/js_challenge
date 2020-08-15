let convert = require('../lib/reverse-string.js');
var assert = require('assert');

describe('reverseWordsInASentence', function () {
  it('should reverse a string', function () {
    assert.equal(convert.reverseWordsInASentence("it's a trap"), "s'ti a part")
    assert.equal(convert.reverseWordsInASentence("now this is podracing"), "won siht si gnicardop")
    assert.equal(convert.reverseWordsInASentence("these are not the droids you are looking for"), "eseht era ton eht sdiord uoy era gnikool rof")
  });
});
