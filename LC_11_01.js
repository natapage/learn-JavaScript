// // 1.
// const myArr = [1, 2, 3, 3, 3, 5, 7];
// reverse(myArr); // должна вернуть [3, 2, 1];
// //

function reverse(myArr) {
  let newArr = [];
  for (let i = myArr.length - 1; i >= 0; i--) {
    newArr.push(myArr[i]);
  }
  return newArr;
}

console.log(reverse(myArr));

const myArr2 = [0, 0, 1, false, 2, undefined, "", 3, null];
// compact(myArr2) // должна вернуть [1, 2, 3]

function findFalse(myArr) {
  return myArr.filter(Boolean);
}

log(findFalse(myArr2));
