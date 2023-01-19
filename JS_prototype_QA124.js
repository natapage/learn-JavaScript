// _________________________________________________________________________________________________

// Изменяем "prototype"

// В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

// Сначала у нас есть такой код:

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

alert(rabbit.eats); // true

// Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert(rabbit.eats); // ?  true

// …А если код такой (заменили одну строчку)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert(rabbit.eats); // ?  false
// Или такой (заменили одну строчку)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert(rabbit.eats); // ? true
// Или, наконец, такой:

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert(rabbit.eats); // ? undefined

// __________________________________________________________________________________________________________________

// Создайте новый объект с помощью уже существующего
// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

// Можем ли мы сделать так?

let obj2 = new obj.constructor();

// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает.
// И пример функции-конструктора, с которой такой код поведёт себя неправильно.

// Мы можем использовать такой способ, если мы уверены в том, что свойство "constructor" существующего объекта имеет корректное значение.
// Например, если мы не меняли "prototype", используемый по умолчанию, то код ниже, без сомнений, сработает:

function User(name) {
  this.name = name;
}

let user = new User("John");
let user2 = new user.constructor("Pete");

alert(user2.name); // Pete (сработало!)

// …Но если кто-то перезапишет User.prototype и забудет заново назначить свойство "constructor", чтобы оно указывало на User, то ничего не выйдет.

// Например:

function User(name) {
  this.name = name;
}
User.prototype = {}; // (*)

let user = new User("John");
let user2 = new user.constructor("Pete");

alert(user2.name); // undefined
