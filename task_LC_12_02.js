// Напишите функцию  для преобразования суммы в монеты разного достоинства.

// пример: amount_coins(96, [25, 10, 5, 2, 1])

// 96 - сумма, а 25, 10, 5, 2, 1 - монеты.
// Вывод : 25,25,25,10,10,1

function getCoinsAmount(num, arr) {
  let result = [];
  for (let coin of arr) {
    while (num / coin >= 1) {
      result.push(coin);
      num -= coin;
    }
  }
  return result;
}
console.log(getCoinsAmount(96, [25, 10, 5, 2, 1]));

// _______________________________________________________________________________________________

// Напишите функцию, которая бы убирала все дубли из массива

let arr = [1, 1, 2, 3, 4, 4, 5, 6];
// должно получиться [2, 3, 5, 6]

function removeDuplicates(arr) {
  let result = [];
  let counter = arr.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  let map = Object.entries(counter);
  for (let item of map) {
    if (item[1] === 1) {
      result.push(item[0]);
    }
  }
  return result;
}

console.log(removeDuplicates(arr));
