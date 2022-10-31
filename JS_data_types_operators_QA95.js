/////////// VARIABLES (переменные) ///////////////

let admin;
let userName = "John";
admin = userName;
// alert(admin);

// Создайте переменную для названия нашей планеты. Как бы вы её назвали?
// Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?

let planetName = "Earth";
let currentUser = "John Smith";

// Можно ли использовать заглавные буквы для имени birthday? А для age? Или одновременно для обеих переменных?

const BIRTHDAY = "18.04.1982"; // да, можно в uppercase
// const AGE = someCode(BIRTHDAY); // нет, т.к. age вычисляется во время выполнения скрипта

/////////// DATA TYPES (типы данных) ///////////////

//Что выведет этот скрипт?

let firstName = "Ilya";

alert(`hello ${1}`); // hello 1

alert(`hello ${"firstName"}`); // hello firstName

alert(`hello ${firstName}`); // hello Ilya

///////////BASIC OPERATORS, TYPE CONVERSIONS (преобразование типов), TYPE COERCON (приведение типов)///////////////

// Чему будут равны переменные a и x после исполнения кода в примере ниже?

let i = 2;
let x = 1 + (i *= 2); // 5

//Какой результат будет у выражений ниже?

"" + 1 + 0; // '10'
"" - 1 + 0; // NaN -1( пустая строка приводится к 0)
true + false; // 1
6 / "3"; // 2
"2" * "3"; // 6
4 + 5 + "px"; // '9px'
"$" + 4 + 5; //'$45'
"4" - 2; // 2
"4px" - 2; // NaN
"  -9  " + 5; // '  -9  5'
"  -9  " - 5; // -14
null + 1; // 1
undefined + 1; // NaN
" \t \n" - 2; // -2

8 / "2"; //4
"number" + 5 + 1; // 'number51'
5 + 1 + "number"; //'6number'
7 && 2; // 2
2 && 7; // 7
null + 1; // 1
"five" + +"two"; // 'fiveNan'
"true" == true; // false (равно это оператор сравнения, поэтому операнды приводятся к числам)
false == "false"; // false
!!"false" == !!"true"; // true (true == true)
"4" - 3; //1
"4px" - 3; // NaN
0 || ("0" && 1); // 1 true

// В чём ошибка? Исправьте её. Результат должен быть 3.

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b); // 12   добавить унарный плюс для преобразования к числу

// Каким будет результат этих выражений?

5 > 4; // true
"ананас" > "яблоко"; // false
"2" > "12"; // true
undefined == null; // true (только при нестрогом сравнении)
undefined === null; //false
null == "\n0\n"; // false
null === +"\n0\n"; //false

// Что выведет код ниже?

alert(null || 2 || undefined); // 2 тк первое true

alert(alert(1) || 2 || alert(3)); // 1 и потом 2 ( первое после выполнения будет undefined)

alert(1 && null && 2); // null

alert(alert(1) && alert(2)); //1 а затем undefined. Вызов alert не возвращает значения, или, иначе говоря, возвращает undefined.

alert(null || (2 && 3) || 4); // 3;

// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

let age = 15;

if (age >= 14 && age <= 90);

// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора

if (!(age >= 14 && age <= 90));
if (age < 14 && age > 90);

// Какие конкретно значения будут результатами выражений в условиях if(...)?
// выполнитсяли команда

if (-1 || 0) alert("first"); // -1, выполлится
if (-1 && 0) alert("second"); // 0 false, не выполнится
if (null || (-1 && 1)) alert("third"); // 1, выполнится

/////////// оператор if ///////////////

// Выведется ли alert?

if ("0") {
  alert("Привет");
} // да, тк строка не пустая возвращает true

// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
let answer = promt('Какое "официальное" название JavaScript?');
if (answer == "ECMAScript") {
  alert("Верно!");
} else alert("Не знаете? “ECMAScript”!");

// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
// Предполагается, что пользователь вводит только числа.

let number = promt("Введите число");
if (number > 0) {
  alert("1");
} else if (number < 0) {
  alert("-1");
} else if (number === 0) {
  alert("0");
}

// Перепишите конструкцию if с использованием условного оператора '?':

let result;

if (a + b < 4) {
  result = "Мало";
} else {
  result = "Много";
}

result = a + b < 4 ? "Мало" : "Много";

// Перепишите if..else с использованием нескольких операторов '?'.
// Для читаемости рекомендуется разбить код на несколько строк.

let message;

if (login == "Сотрудник") {
  message = "Привет";
} else if (login == "Директор") {
  message = "Здравствуйте";
} else if (login == "") {
  message = "Нет логина";
} else {
  message = "";
}

message =
  login == "Сотрудник"
    ? "привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет логина"
    : "";