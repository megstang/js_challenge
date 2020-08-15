let convert = require('../lib/first-unique-char-index.js')
var assert = require('assert');

describe('first-unique-char-index', function () {
  it('should return index of the first char that wasnt repeated', function () {
    assert.equal(convert.firstUniqueCharacterIndex("hello there"), 4)
    assert.equal(convert.firstUniqueCharacterIndex("blahblah"), -1)
    assert.equal(convert.firstUniqueCharacterIndex("collaboration"), 0)
  });
});
