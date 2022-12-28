//////////////////////// рекурсия и стек ////////////////////////////

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:

// С использованием цикла.

function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.

function sumTo(n) {
  if (n === 1) {
    return n;
  } else {
    return n + sumTo(n - 1);
  }
}

// С использованием формулы арифметической прогрессии.

function sumTo(n) {
  return ((n + 1) / 2) * n; // формула суммы членов арифметической прошгрессии
}

// Пример работы вашей функции:

// function sumTo(n) { /*... ваш код ... */ }

// alert( sumTo(100) ); // 5050
// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?
// самый быстрй третий, потому что просто формула и алгоритмическая слоожность 3 ( 3 операции), самый межденный через рекурсию (из-за вложенных выховов)

// _______________________________________________________________________________________

// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

// Пример работы:

// function fib(n) { /* ваш код */ }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757
// P.S. Все запуски функций из примера выше должны работать быстро. Вызов fib(77) должен занимать не более доли секунды.

function fib(n) {
  if (n <= 1) {
    return;
  }
  return fib(n - 1) + fib(n - 2);
}

// _______________________________________________________________________________________

// Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1.
//  Факториал n обозначается как n!

// Определение факториала можно записать как:

// n! = n * (n - 1) * (n - 2) * ...*1
// Примеры значений для разных n:

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

function factorial(n) {
  if (n === 1) {
    return n;
  }
  return n * factorial(n - 1);
}

// alert( factorial(5) ); // 120
// P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6

// _______________________________________________________________________________________

// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
// Напишите функцию printList(list), которая выводит элементы списка по одному.

function printList(list) {
  let tmp = list;

  while (tmp) {
    alert(tmp.value);
    tmp = tmp.next;
  }
}

printList(list);

// через рекурсию

function printList(list) {
  alert(list.value); // выводим текущий элемент

  if (list.next) {
    printList(list.next); // делаем то же самое для остальной части списка
  }
}

printList(list);

// Сделайте два варианта решения: используя цикл и через рекурсию.

// Как лучше: с рекурсией или без?

// Технически, способ с циклом более эффективный.
// В обеих реализациях делается то же самое, но для цикла не тратятся ресурсы для вложенных вызовов.

// ________________________________________________________________________________________________________________________
//////////////////////////////////// замыкание /////////////////////////////////////////

// Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.
// Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?

function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

alert(counter2()); // ?  0
alert(counter2()); // ?  1

// это независимые счетчики, так как функции создаными разными независимысм вызовами makeCounter()

// ________________________________________________________________________________________________________________________

// Здесь объект счётчика создан с помощью функции-конструктора.
// Будет ли он работать? Что покажет?

function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter = new Counter();

alert(counter.up()); // ?  count 1 (префиксная форма инкремента)
alert(counter.up()); // ?  count 2
alert(counter.down()); // ? count 1
// всё будет работать хорошо, здесь одно лексическое окружение (функции были созданы в результате вызова функции с одним рексическим окружением)

// ________________________________________________________________________________________________________________________

// Посмотрите на код. Какой будет результат у вызова на последней строке?
// let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); // будет ошибка

// ________________________________________________________________________________________________________________________

// Сумма с помощью замыканий
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

// Например:

// sum(1)(2) = 3
// sum(5)(-1) = 4

function sum(a) {
  return function (b) {
    return a + b;
  };
}

// ________________________________________________________________________________________________________________________

// Фильтрация с помощью функции
// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

// Сделайте набор «готовых к употреблению» фильтров:

// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:

// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
// Например:

// /* .. ваш код для inBetween и inArray */
// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

// ________________________________________________________________________________________________________________________

// Сортировать по полю
// У нас есть массив объектов, который нужно отсортировать:

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];
// Обычный способ был бы таким:

// по имени (Ann, John, Pete)
users.sort((a, b) => (a.name > b.name ? 1 : -1));

// по возрасту (Pete, Ann, John)
users.sort((a, b) => (a.age > b.age ? 1 : -1));

// Можем ли мы сделать его короче, например вот таким?
users.sort(byField("name"));
users.sort(byField("age"));

// То есть чтобы вместо функции мы просто писали byField(fieldName).

// Напишите функцию byField, которая может быть использована для этого.

function byField(fieldName) {
  return function (a, b) {
    return a[fieldName] > b[fieldName] ? 1 : -1;
  };
}

// ________________________________________________________________________________________________________________________

// Армия функций
// Следующий код создаёт массив из стрелков (shooters).

// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    // изначально не было строки где m = i, поэтому терялось лексическое окружение с текущим i. i бралось то, котореы осталось после выполнения makeARmy и равнялось 10
    let m = i;
    let shooter = function () {
      // shooter function
      alert(m); // should show its number
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10

// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
// Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.

// потому что в массив shooters будет сложено 10 функций которые не будут иметь своего контекста с порядковым номером (i)
// Открыть песочницу с тестами для задачи.