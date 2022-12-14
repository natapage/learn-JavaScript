///////////////// циклы for/while ?///////////////

// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
}

let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

let number;

do {
  number = prompt("Введите число больше 100", 0);
} while (number <= 100 && null);

// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
// Оба цикла выводят alert с одинаковыми значениями или нет?

// Префиксный вариант ++i:

let i = 0;
while (++i < 5) alert(i); // 1 2 3 4

// Постфиксный вариант i++

let i = 0;
while (i++ < 5) alert(i); // 1 2 3 4 5

// При помощи цикла for выведите чётные числа от 2 до 10.

for (let n = 2; n <= 10; n++) {
  if (n % 2 == 0) atert(n);
}

// Какое последнее значение выведет этот код? Почему?

let i = 3;

while (i) {
  alert(i--);
} // 1

// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов.

let n = 10;
nextPrime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }
  alert(i);
}

///////////////// конструкция Switch ///////////////

// Напишите if..else, соответствующий следующему switch:

switch (browser) {
  case "Edge":
    alert("You've got the Edge!");
    break;

  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    alert("Okay we support these browsers too");
    break;

  default:
    alert("We hope that this page looks ok!");
}

//////////

If(browser === "Edge") {
  alert("You've got the Edge!");
    break;
} if (browser === "Chrome" ||browser === "Firefox" ||browser === "Safari" ||browser === "Opera") {
  alert("Okay we support these browsers too");
} else {
    alert("We hope that this page looks ok!");
}

// Перепишите код с использованием одной конструкции switch:

const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}

///

switch (number) {
  case 0: 
    alert('Вы ввели число 0');
    break;
  case 1:
    alert('Вы ввели число 1');
    break;
  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3');
    break;
}


// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она задаёт вопрос confirm и возвращает его результат.
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
// Сделайте два варианта функции checkAge:
// Используя оператор ?
// Используя оператор ||

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

// 

function checkAge(age) {
  return age > 18? true : confirm('Родители разрешили?');
}

function checkAge(age) {
  return age > 18 || confirm('Родители разрешили?');
}

//
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min (a, b) {
  return a < b ? a: b;
}


// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
//Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
//Запустить демо
// //P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

function pow (a, b) {
  return a**b;
}

let x = promt('введите x', '');
let y = promt('введите y','');

if (y < 1) {
  alert(`Степень ${y} не поддерживается, используйте натуральное число`);
} 

console.log(pow(x,y));


// Замените код Function Expression стрелочной функцией:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);


ask("Вы согласны?", () => alert("Вы согласились.", () => alert("Вы отменили выполнение.");


///////////////// метод Number.isNaN() и функция isNaN() ///////////////

// В отличие от глобальной функции isNaN(), Number.isNaN() не имеет проблемы принудительного преобразования параметра в число. 
// Это значит, что в него безопасно передавать значения, которые обычно превращаются в NaN, но на самом деле NaN не являются. 
// Также это значит, что метод возвращает true только для числовых значений, имеющих значение NaN.


Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0) // true

// При использовании глобальной функции isNaN() это всё будет true
Number.isNaN('NaN');      // false
Number.isNaN(undefined);  // false
Number.isNaN({});         // false
Number.isNaN('blabla');   // false

// А это всё в любом случае будет false
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN('37');
Number.isNaN('37.37');
Number.isNaN('');
Number.isNaN(' ');

/////////////////////////////////Метод Number.isFinite() и функция isFinite()/////////////////////////////

// Метод Number.isFinite() определяет, является ли переданное значение конечным числом.
// В отличии от глобальной функции isFinite(), этот метод принудительно не преобразует параметр в число. 
// Это означает, что он возвращает true только для конечных значений числового типа.

Number.isFinite(Infinity);  // false
Number.isFinite(NaN);       // false
Number.isFinite(-Infinity); // false

Number.isFinite(0);         // true
Number.isFinite(2e64);      // true

Number.isFinite('0');       // false, при использовании глобальной
                            // функции isFinite('0') было бы true