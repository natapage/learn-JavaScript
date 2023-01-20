// Добавить функциям метод "f.defer(ms)"
// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

// После этого должен работать такой код:

function f() {
  alert("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду

Function.prototype.defer = function defer(ms) {
  setTimeout(f, ms);
};
// ___________________________________________________________________________________________________

// Добавьте функциям декорирующий метод "defer()"
// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

// Например, должно работать так:

function f(a, b) {
  alert(a + b);
}

Function.prototype.defer = function defer(ms) {
  let f = this;
  return function decorator(...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
};

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

// Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.

//________________________________________________________________________

console.log('1: ', ({}).prototype === ({}).__proto__); // false

function ITkam() {}
console.log('2: ', ITkam.prototype === ITkam.__proto__); // false

function ITcub() {}
console.log('3  ', ITcub.__proto__ === ITkam.__proto__); // true
console.log('4 ', ITcub.prototype === ITkam.prototype); // true  false

let Component = (props) => {
  return `<div> I dont't know Prototype</div>`;
};
console.log('5', Component.prototype === Object.prototype); // false

let age = 18;

log('6 ', age.prototype === Number.prototype); //  false
log('7 ', age.__proto__ === Number.prototype); // true

class Hacker {}
log('8 ', Hacker.__proto__ === Function.prototype); // true
log('9 ', ITcub.__proto__ === ); // ? ITcub.__proto__ === Function.prototype

log('10 ', age.__proto__ === ); // ? age.__proto__ === Number.prototype