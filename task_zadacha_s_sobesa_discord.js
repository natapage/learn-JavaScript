// [Главы 2, 4, 5, 8] Задача с собеса
// Сложность 5/10 на собесе, обычная 3/10
// Реализовать функционал, чтобы работало как ожидается
// // returns new array with these rules:
// //
// [1,2,3].copy(2) // [1,2,3,1,2,3]
// [4].copy(3) // [4,4,4]
// [1,2,3].copy(1) // [1,2,3]
// [1,2,3].copy(-1) // []
// [1,2,3].copy(0) // []
// [1,2,3].copy() // [1,2,3]

function getCopy(arr, a) {
  let arrNew = [];

  if (a <= 0) {
    return [];
  }
  if (a == undefined || a === 1) {
    return arr;
  }
  if (a >= 2) {
    for (let i = 0; i < a; i++) {
      for (let item of arr) {
        arrNew.push(item);
      }
    }
  }
  return arrNew;
}

let arr = [1, 2, 3];
