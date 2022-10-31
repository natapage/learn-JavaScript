//////////////// Объекты /////////////////////////

// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:

// let schedule = {};
// alert(isEmpty(schedule)); // true
// schedule["8:30"] = "get up";
// alert(isEmpty(schedule)); // false

function isEmpty(obj) {
  for (let key in obj) return false;
  return true;
}

// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
const user = {
  name: "John",
};
// это будет работать?

user.name = "Pete"; //да. изменить нельзя только имя объекта

// У нас есть объект, в котором хранятся зарплаты нашей команды:
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum);

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.

// Например:
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in menu) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
}



/////////////////////  Методы объекта, "this" /////////////////

// Использование "this" в литерале объекта
// важность: 5
// Здесь функция makeUser возвращает объект.
// Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name); // будет ошибка. чтобы this ссылался на объект, он должен быть возвращен с помощью метода

// Создайте калькулятор
// важность: 5
// Создайте объект calculator (калькулятор) с тремя методами:
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  read() {
    this.a = +promt("введите значение a");
    this.b = +promt("введите значение b");
  },
  sum(a, b) {
    return this.a + this.b;
  },
  mul(a, b) {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

let ladder = {
  step: 0,
  up() {
    step++;
    return this;
  },
  down() {
    step--;
    return this;
  },
  showStep() {
    // показывает текущую ступеньку
    alert(this.step);
    return this;
  },
};

// Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
// Такой подход широко используется в библиотеках JavaScript.




/////////////////////////// конструктор, оператор new ////////////////////////////////////

// Возможно ли создать функции A и B, чтобы new A() == new B()?
// Если да – приведите пример вашего кода.


function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true 

// Да, возможно.
// Если функция возвращает объект, то new вернёт его вместо this.
// Таким образом, они могут, к примеру, возвращать один и тот же внешне определённый объект obj:

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true   Два объекта равны друг другу тольео если это один и тот же объект.




// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

function Calculator() {
  this.read = function() {
    this.a = +promt("введите значение a");
    this.b = +promt("введите значение b");
  };

  this.sum = function(a, b) {
    return this.a + this.b;
  };

  this.mul = function(a, b) {
    return this.a * this.b;
  }
}



// Создайте функцию-конструктор Accumulator(startingValue).
// Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.
// Ниже вы можете посмотреть работу кода:


let accumulator = new Accumulator(1); // начальное значение 1 в новом объекте

accumulator.read(); /// прибавляет введённое пользователем значение к текущему значению
accumulator.read(); /// прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value);  // выводит сумму этих значений

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    this.value += +prompt('введите новое значение');
  }
}