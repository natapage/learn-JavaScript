// Класс расширяет объект?
// Как мы уже знаем, все объекты наследуют от Object.prototype и имеют доступ к «общим» методам объекта, например hasOwnProperty.

// Пример:

class Rabbit {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

// метод hasOwnProperty от Object.prototype
alert(rabbit.hasOwnProperty("name")); // true

// Но что если мы явно напишем "class Rabbit extends Object" – тогда результат будет отличаться от обычного "class Rabbit"?
// В чем разница?

// Ниже пример кода с таким наследованием (почему он не работает? исправьте его):

class Rabbit extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

alert(rabbit.hasOwnProperty("name")); // без super была ошибка

// Как мы знаем, синтаксис «extends» устанавливает 2 прототипа:

// Между "prototype" функций-конструкторов (для методов)
// Между самими функциями-конструкторами (для статических методов).
// В случае с class Rabbit extends Object это значит:

class Rabbit extends Object {}

alert(Rabbit.prototype.__proto__ === Object.prototype); // (1) true
alert(Rabbit.__proto__ === Object); // (2) true

// Таким образом, Rabbit предоставляет доступ к статическим методам Object через Rabbit, например:

class Rabbit extends Object {}

// обычно мы вызываем Object.getOwnPropertyNames
alert(Rabbit.getOwnPropertyNames({ a: 1, b: 2 })); // a,b
