
/**
 * For n = 152, the output should be 52
 */
let num = 109;

function deleteDigit(n) {
  let lengthOfNum = String(n).length;
  let arrN = String(n).split('');
  let allNumbs = [];


  for (let i = 0; i < lengthOfNum; i++) {
    allNumbs.push(Number(new Array().concat(arrN.slice(0,i),arrN.slice(i+1)).join('')));
  }
  
  let maxNum = +(allNumbs.sort().splice(-1, 1));

  console.log(maxNum);
}
console.log(deleteDigit(num));




// function deleteDigit(n) {
//   let withoutMinNum = [];
//   let minNum = String(n).split('').sort().slice(0, 1);
//   let numArr = String(n).split('');

//   numArr.forEach(item => {
//     withoutMinNum.push(item);
//   });

//   for (let i = 0; i < withoutMinNum.length; i++) {
//     if (numArr[i] == minNum) {
//       withoutMinNum.splice(i, 1); 
//       break;
//     }
//   }
 
  
//   return +(withoutMinNum.join(''));
// }
// console.log(deleteDigit(num));


