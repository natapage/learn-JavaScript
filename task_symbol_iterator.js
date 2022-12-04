// Задачка на итератор и #задания:

// [Symbol.iterator]
// Сложность 2/10

// Написать итератор, чтобы выводил рандомные натуральные числа в диапазоне [0..500]
//  и итерировал пока не найдет заданное рандомное число (заранее вычисленное по этому же алгоритму и имеющееся в свойстве объекта)
//  и показано перед циклом. Алгоритм вынести в отдельную функцию,
// чтобы можно было заюзать как в итераторе так и в объекте при инициализации.

// Заюзать разные способы итерации по итератору.

const getRandom = () => Math.floor(Math.random() * 501);

const range = {
  number: getRandom(),
  [Symbol.iterator]: function () {
    return {
      number: this.number,
      next() {
        const current = getRandom();
        if (this.number != current) {
          return { done: false, value: current };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (const item of range) {
  console.log(item);
}
