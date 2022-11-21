// что возвращают метод splice, sort
// в задаче про конструктор заказа посмотреть метод, который удаляет товары из заказа
// перерешать задачки из codewars используя методы массивов
// главы 5.6-5.9

let obj = {
  name: "nata",
  age: 32,
  city: "Moscow",
  [Symbol.iterator]: function () {
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

for (let item of obj) {
  console.log(item);
}
