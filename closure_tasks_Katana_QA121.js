git(
  // 1
  function immediateA(a) {
    return (function immediateB(b) {
      console.log(a);
    })(1);
  }
)(0);

// 0 так как замыканием может быть не только объявленные переменные во внешней функции, но и пришедшие аргументы

// 2
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count);
  }
  console.log(count);
})();

// 1 и 0 так как count в блоке if объявлен там же и является внутренним лексическим окружением, , а второй консоль за блоком кода и обращается к внешнему

// 3
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}

// 3 3 3 var переменная - с глобальной областью видимости. выполнение функции колбэк из setTimeout будет отправляться в очередь до окончания выполнения цикла.
// функция колбэк не имеет в своей области видимости переменной i и поэтому  на момент вызовов колбэков из очереди i будет уже = 3.
// Изменить можно, добавив i во внутреннее лексическое окружение функции колбэка. (объявить i через let, передать i внутрь колбэка,
// обернуть сеттаймаут в функцию с аргументом i)

// 4
function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }

  let message = `zopa - ${count}`;
  function log() {
    console.log(message); //
  }

  return [increment, log];
}

const [increment, log] = createIncrement(); //деструктурирующее присваивание
increment(); // увеличит count на 1 ( count = 1)
increment(); // ( count = 2)
increment(); // ( count = 3)
log();
`zopa - 0`; // при деструктцризации была создана новая функция, куда в момент вызова createIncrement()
// было добавлено соответствующее лексическое окружение. То есть increment() и log() не связаны,
// просто на момент создания у них одинаковое окружение

// 5

let counter = 0;

function test() {
  console.log(++counter);
}

test();
// замыкание и префиксная форма инкремента. будет 1

// 6
let conter = 0;

function test() {
  console.log(++conter);
}

test();

function test2(cb) {
  let conter = 5;

  cb();
}

test2(test);

// 1 и 2 ссылка на внешнее лексическое окружение функции test остается прежним

// 7
function two() {
  console.log(a);
}

function one() {
  var a = 2;
  console.log(a);
  two();
}

var a = 1;
console.log(a);
one();

for (var i = 0; i < 3; i++) {
  (function () {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  })(i);
}

// 1 2 1 3 3 3
// если бы в функцию-обертку таймаута было передано i то было бы 1 2 1 0 1 2
