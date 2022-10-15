const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

//  let arr1 = ([1, [2, 3, 3,[1,[1, 3, 4, 5, [1, [[]], 5,]]],], 3, 4, 4]); // => 1
//  // depthCalc.calculateDepth([1, 2, 3, [4, 5]]); // => 2
//  // depthCalc.calculateDepth([[[]]]); // => 3
 
//  class DepthCalculator {
//    calculateDepth(arr) {
//      let count = 1;
 
//      function recursiveFoo(arr) {
//        console.log(count);
//        arr.forEach(item => { 
//          if (Array.isArray(item)) {
//            count++;  
//            recursiveFoo(item);
//          }
//        });
//      }
//      recursiveFoo(arr);
 
//      return count;
//    }
//  }
 
//  let a = new DepthCalculator();
//  console.log(a.calculateDepth(arr1));

 class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
          console.log(count);
          arr = arr.flat();
          return count += this.calculateDepth(arr);
        }
      }
    
    return count;
  }
}

module.exports = {
  DepthCalculator
};
