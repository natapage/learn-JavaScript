// NaN = ?
// switch - case ( случай когда нет брейк и случай когда дефолт в самом начале)
// массив в операции сравнения
// долг из QA-95: Покурить почему в консоли chrome console.log(test) без юзстрикта дает ошибку

//////////////////////     NaN     //////////////////////////////

// Глобальное свойство NaN является значением, представляющим не-число (Not-A-Number). ОТносится к типу данных number
// Проверка на равенство NaN
// NaN является неравным (посредством сравнения через ==, !=, ===, and !==) любому другому значению,
// включая другое значение NaN. Используйте Number.isNaN() или isNaN(),
// чтобы наиболее понятным образом определить является ли значение значением NaN.
// Или выполните само-сравнение: NaN, и только NaN, в результате такого сравнения будет неравным самому себе.

NaN === NaN; // false
Number.NaN === NaN; // false
isNaN(NaN); // true
isNaN(Number.NaN); // true

// Тем не менее, обратите внимание на разницу между функцией isNaN() и методом Number.isNaN():
// первая вернёт true, если значение в настоящий момент является NaN, или если оно станет NaN после того, как преобразуется в число,
//  в то время как последний вернёт true, только если текущим значением является NaN:

isNaN("hello world"); // true
Number.isNaN("hello world"); // false

/////////////////// Undefined ///////////////////////////////

let number;
number; // => undefined
let movie = { name: "Interstellar" };
movie.year; // => undefined
let movies = ["Interstellar", "Alexander"];
movies[3]; // => undefined

// Как видим, undefined выводится при попытке доступа к:
// неинициализированной переменной number;
// несуществующему свойству объекта movie.year;
// несуществующему элементу массива movies[3].
// Оператор typeof возвращает строку undefined для неопределённого значения:

// typeof undefined === 'undefined';

// Переменная, не имеющая присвоенного значения, обладает типом undefined.
// Также undefined возвращают метод или инструкция, если переменная, участвующая в вычислениях, не имеет присвоенного значения.
// Функция возвращает undefined, если она не возвращает какого-либо значения.

undefined == null;
// Значения null и undefined равны == друг другу и не равны любому другому значению.

////////////////////// Switch - case //////////////////////////////

// Если break нет, то выполнение пойдёт ниже по следующим case, при этом остальные проверки игнорируются.
// Пример без break:

let a = 2 + 2;

switch (a) {
  case 3:
    alert("Маловато");
  case 4:
    alert("В точку!");
  case 5:
    alert("Перебор");
  default:
    alert("Нет таких значений");
}

// В примере выше последовательно выполнятся три alert:

alert("В точку!");
alert("Перебор");
alert("Нет таких значений");

// что будет, если default расположить выше всех кейсов?
//  не выполнится, так как дефолт выполняется только в случае, если ни один из кейсов не совпал и в конце кода

// ////////////// массив в операции сравнения c числом////////////////

// К числу также можно пытаться приводить любые значения. Если JavaScript не сможет привести какое-то значение к числу,
// мы получим NaN — особое значение, представляющее не-число (Not-a-Number).

// К числу:
Number("123"); // 123
Number("123.4"); // 123.4
Number("123,4"); // NaN
Number(""); // 0
Number(null); // 0
Number(undefined); // NaN
Number(true); // 1
Number(false); // 0
Number(function () {}); // NaN
Number({}); // NaN
Number([]); // 0
Number([1]); // 1
Number([1, 2]); // NaN

// Обратите внимание, что Number от пустого массива — 0,
// от массива с одним числом — это число
// и от массива с несколькими числами — NaN.
// Почему так происходит, мы поймём чуть ниже.

// К логическому также можно приводить любые значения:

Boolean(""); // false
Boolean("string"); // true
Boolean("false"); // true
Boolean(0); // false
Boolean(42); // true
Boolean(-42); // true
Boolean(NaN); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(function () {}); // true
Boolean({}); // true
Boolean({ key: 42 }); // true
Boolean([]); // true
Boolean([1, 2]); // true

// Грубо говоря, всё, кроме пустой строки, нуля,
// NaN, null и undefined — true.
