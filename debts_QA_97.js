// NaN = ?
// switch - case ( случай когда нет брейк и случай когда дефолт в самом начале)
// массив в операции сравнения
// долг из QA-95: Покурить почему в консоли chrome console.log(test) без юзстрикта дает ошибку

//////////////////////     NaN     //////////////////////////////
// Глобальное свойство NaN является значением, представляющим не-число (Not-A-Number).

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
