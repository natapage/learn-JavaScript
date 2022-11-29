//////////////////////////////  Symbol.Iterator  //////////////////////////////

let obj = {
  name: "nata",
  age: 32,
  city: "Moscow",
  [Symbol.iterator]: function () {
    return {
      arrValues: Object.values(this), // получаем массив знечений свойств объекта
      index: 0,

      next() {
        if (this.index < this.arrValues.length) {
          return {
            done: false,
            value: this.arrValues[this.index++],
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  },
};

for (let item of obj) {
  console.log(item);
}

let range = {
  from: 1,
  to: 5,
};

// _____________________________________________________________________________________________________________

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

// _____________________________________________________________________________________________________________

//////////////////////////////  Map и Set  //////////////////////////////

// Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
// Например:

function unique(arr) {
  let uniqueSet = new Set(arr);
  let uniqueArr = [];
  for (let item of uniqueSet) {
    uniqueArr.push(item);
  }
  return uniqueArr;
}

// или

function unique(arr) {
  return Array.from(new Set(arr));
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

alert(unique(values)); // Hare,Krishna,:-O

// P.S. Здесь мы используем строки, но значения могут быть любого типа.
// P.P.S. Используйте Set для хранения уникальных значений.

// _____________________________________________________________________________________________________________

// Отфильтруйте анаграммы
// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

// Например:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

// Например:

// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let arrNew = arr.map((item) => item.toLowerCase().split("").sort().join(""));
  let n = 0;
  let mapFromArr = new Map();
  let result = [];
  while (n < arr.length) {
    mapFromArr.set(arrNew[n], arr[n]);
    n++;
  }
  let setFromArr = new Set(arrNew);
  for (let word of setFromArr) {
    result.push(mapFromArr.get(word));
  }
  return result;
}

//  или

function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join(""); // (*)
    map.set(sorted, word); // значения по одинаковому ключу (отсортированному слову) будут перезаписываться
  }

  return Array.from(map.values());
}

// _____________________________________________________________________________________________________________

// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
// Но это не выходит:

let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция

keys.push("more");
// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?

// нужно добавить

Array.from(map.keys()); // после вызова map.keys() появляется итерируемый объект с ключами, который нужно преобраховать в массив.
// метод push сработает только на массиве.
