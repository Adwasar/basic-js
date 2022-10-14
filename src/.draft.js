/**
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

let arrA = [1, 2, 3, '--double-prev', 4, 5];
let arrB = [1, 2, 3, '--double-next', 4, 5];
let arrC = [1, 2, 3, '--discard-prev', 4, 5];
let arrD = [1, 2, 3, '--discard-next', 4, 5];
let arrA2 = ['--double-prev', 1, 2, 3, 4, 5];
let arrB2 = [1, 2, 3, 4, 5, '--double-next'];
let arrC2 = ['--discard-prev', 1, 2, 3, 4, 5];
let arrD2 = [1, 2, 3, 4, 5, '--discard-next'];


function transform(arr) {
  let newArr = [];
  let discardIdx;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--double-prev') {
      if (arr[i - 1]) {
        newArr.push(arr[i - 1]);
      } else {
        return "'arr' parameter must be an instance of the Array!";
      }
    } else if (arr[i] == '--double-next') {
      if (arr[i + 1]) {
        newArr.push(arr[i + 1]);
      } else {
        return "'arr' parameter must be an instance of the Array!";
      }
    } else if (arr[i] == '--discard-prev') {
      if (arr[i - 1]) {
        newArr.pop();
      } else {
        return "'arr' parameter must be an instance of the Array!";
      }
    } else if (arr[i] == '--discard-next') {
      if (arr[i + 1]) {
        discardIdx = i;
      } else {
        return "'arr' parameter must be an instance of the Array!";
      }
    } else {
      newArr.push(arr[i]);
    }
  }

  if (discardIdx) {
    newArr.splice(discardIdx, 1);
  }

  return newArr;
}
console.log(transform(arrD));
