let myArr = [1, 2, 4, 5];
// myArr.splice(2);
// console.log(myArr);


function deleteElem(arr, index) {
  arr.splice(index, 1);
}
deleteElem(myArr, 2);

console.log(myArr);