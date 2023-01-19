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