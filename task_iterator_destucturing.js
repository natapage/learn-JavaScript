// [Symbol.iterator, Деструкторизация]
// Деструктрурировать массив как объект и получить не undefined значения.

let arr = ["one", "two", "three"];

let { 0: first, 1: second, 2: third } = arr;
console.log(first); // undefined было вот так let { first, second, third }

// Деструктурировать объект как массив. Какая ошибка появляется? Применить Symbol.iterator чтобы деструкторизировать без ошибок.

let obj = {
  one: 1,
  two: 2,
  three: 3,
  [Symbol.iterator]() {
    return {
      arrValues: Object.values(this),
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

let [one, two, three] = obj; // работает
console.log(one);

let [one, two, three] = obj; // без Symbol.iterator было Uncaught TypeError: obj is not iterable
