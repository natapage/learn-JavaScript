// Скопирован ли массив?
// важность: 3
// Что выведет следующий код?

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert(fruits.length); // 4 так как массивы копируются как объекты, по ссылке

// _______________________________________________________________________________________________________________________

Давайте произведём 5 операций с массивом.

// 1 Создайте массив styles с элементами «Джаз» и «Блюз».
// 2 Добавьте «Рок-н-ролл» в конец.
// 3 Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// 4 Удалите первый элемент массива и покажите его.
// 5 Вставьте Рэп и Регги в начало массива.
// 6 Массив по ходу выполнения операций:

// 1 Джаз, Блюз
// 2 Джаз, Блюз, Рок-н-ролл
// 3 Джаз, Классика, Рок-н-ролл
// 4 Классика, Рок-н-ролл
// 5 Рэп, Регги, Классика, Рок-н-ролл

const styles = ['Джаз', 'Блюз'];
console.log(styles);
styles.push('Рок-н-ролл');
console.log(styles);
styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
console.log(styles.shift());
console.log(styles);
styles.unshift('Рэп', 'Регги');
console.log(styles);

// _______________________________________________________________________________________________________________________


// Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?   положили в конце массива функцию и вызываем ее по индексу массива. arr тут в роли объекта, то есть мы вызываем метод объекта


// _______________________________________________________________________________________________________________________


// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {
  const arr = [];
  while (true) {
    let a = prompt('введите значение a');
    if (!isFinite(a) || a === null || a === "") break;
    arr.push(+a);
  }
  let sum = 0;
  for (let element of arr) {
    sum += element;
  }
  return sum;
}

console.log(sumInput());


// _______________________________________________________________________________________________________________________


// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.
// Например:

// getMaxSubSum([-1, 2, 3, -9]) == 5 (сумма выделенных элементов)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (берём все)
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

// getMaxSubSum([-1, -2, -3]) = 0

function getMaxSubSum(arr) {
  let sum = 0;
  let sumCurrent = 0;

  for (let element of arr) {
    sumCurrent += element;
    if (sumCurrent > sum) {
      sum = sumCurrent;
    };
    if (sumCurrent < 0) {
      sumCurrent = 0;
    };
}
  return sum;
}

// _______________________________________________________________________________________________________________________

