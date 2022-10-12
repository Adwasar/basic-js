const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

//  module.exports = {
//   countCats
// };



const a = [[0, 1, '^^', 2, '^^'], [ 1, '^^']];

let count = 0;

function countCats(matrix) {
  matrix.forEach(item => {
    if (typeof item == 'object') {
      item.forEach(item => {
        if (item == '^^') {
          count += 1;
        }
      });
    }
  });
}

countCats(a); 

console.log(count);


// console.log(a);




