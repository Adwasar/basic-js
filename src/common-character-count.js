const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let letters1 = s1.split('');
  let letters2 = s2.split('');
  let count = 0; 

  for (let i = 0; i < letters1.length; i++) {
    for (let j = 0; j < letters2.length; j++) {
      if (letters2[j] === letters1[i]) {
        letters2.splice(j, 1);
        count++;
        break;
      }
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
