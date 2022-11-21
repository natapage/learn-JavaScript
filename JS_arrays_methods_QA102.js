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

const styles = ["Джаз", "Блюз"];
console.log(styles);
styles.push("Рок-н-ролл");
console.log(styles);
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(styles.shift());
console.log(styles);
styles.unshift("Рэп", "Регги");
console.log(styles);

// _______________________________________________________________________________________________________________________

// Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function () {
  alert(this);
});

arr[2](); // a,b,function(){...}   положили в конце массива функцию и вызываем ее по индексу массива. arr тут в роли объекта, то есть мы вызываем метод объекта

// _______________________________________________________________________________________________________________________

// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {
  const arr = [];
  while (true) {
    let a = prompt("введите значение a");
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
    }
    if (sumCurrent < 0) {
      sumCurrent = 0;
    }
  }
  return sum;
}

// _______________________________________________________________________________________________________________________

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// Примеры:

camelize("background-color") == "backgroundColor";
camelize("list-style-image") == "listStyleImage";
camelize("-webkit-transition") == "WebkitTransition";

function camelize(str) {
  return str
    .split("-")
    .map((item, index) =>
      index == 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join("");
}

// _______________________________________________________________________________________________________________________

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.

arr.filter(function(item, index, array))

function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b);  // метод добавляет элементы в новый массив если true
}

// _______________________________________________________________________________________________________________________


// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
// Например:

let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val >= a && val <= b) {
      arr.splice( i, 1 );
      i--;
    };
  }
}

// _______________________________________________________________________________________________________________________

// Сортировать в порядке по убыванию
// важность: 4
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log( arr ); // 8, 5, 2, 1, -10

// _______________________________________________________________________________________________________________________


// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)

function copySorted(arr) {
  return arr.slice().sort();
}

// _______________________________________________________________________________________________________________________

// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.
// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2"
//  в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
// Пример использования:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. 
// Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
// Например, давайте добавим умножение *, деление / и возведение в степень **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.

function Calculator() {
  this.calculate = function(str) {
    const [a, operator, b] = str.split(' ');
    return this[operator](+a, +b)
  };
  this.addMethod = function(name, func) {
    this[name] = func;
  };
  this['+'] = (a, b) => a + b;
  this['-'] = (a, b) => a - b;
}

const obj = new Calculator();
obj.addMethod("*", (a, b) => a * b);
obj.addMethod("/", (a, b) => a / b);
obj.addMethod("**", (a, b) => a ** b);
obj.calculate("3 * 7");
obj.calculate("3 + 7")
