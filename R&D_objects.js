
// this

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

console.log(user.ref.name); // Каким будет результат? 

// верный вариант:

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let user = makeUser();

alert(user.ref().name); // John


// что будет в консоли?

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

console.log(shape.diameter());
console.log(shape.perimeter());

// 20 и NaN



// ----------------------------------------------------------------------------------------------------------------------


// зачем нужен Object.assign  и чем отличается от:

// что будет тут:
let obj = { name: "Mike" };
let obj2 = obj; 

console.log(obj2 == obj)
// true

let obj = { name: "Mike" };
let obj2 = { name: "Mike" };

console.log(obj2 == obj)
// false



//  покажите на этом примере как работает Object.assign
// Object.assign(dest, [src1, src2, src3...])

// так:
// let obj = { name: "Mike" };
// let obj2 = Object.assign({}, obj)

// console.log(obj2 == obj)
// false


// ----------------------------------------------------------------------------------------------------------------------



//  для чего нужна  опциональная цепочка?  (чтобы не было ошибки, а возвращалось undefind при первом же отсутствующем свойстве объекта )
// что возвращается при использовании опчиональной цепочки? obj?.prop   (obj.prop - если obj существует и undefind если нет)

let key = "firstName";

let user1 = {
  firstName: "John"
};

let user2 = null;

console.log(user1?.[key] ); 
console.log(user2?.[key] ); 

// John
// undefined


// ----------------------------------------------------------------------------------------------------------------------



// функция конструктор, зачем нужна
// приеобразование объектов к примитивам


function Pet(name) {
  this.name = name;
  this.getName = () => this.name;
}

const cat = new Pet("Fluffy");

console.log(cat.getName());
const { getName } = cat;
console.log(getName()); 

// What is logged? - не понимаю что тут происходит, спросить на rnd (деструктуризация?)
// Fluffy //
// Fluffy //

// Как проверить была ли вызвана ли функция при помощи оператора new или без него?
// Используя специальное свойство new.target внутри функции
// В случае обычного вызова функции new.target будет undefined.
//  Если же она была вызвана при помощи new, new.target будет равен самой функции.

function User() {
  console.log(new.target);
}

// без "new":
console.log(); // undefined

// с "new":
new User(); // function User { ... }


// Что будет в консоли?

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}

console.log(member.getFullName());

//Ошибка. Нельзя добавлять свойства конструктору, как обычному объекту.


// ----------------------------------------------------------------------------------------------------------------------



// Преобразование типов? Можно ли объект привести к логическому типу данных?
// ( В логическом контексте все объекты являются true, всё просто. Существует лишь их числовое и строковое преобразование.)

// к числу:
//  К какому типу данных будут преобрахованы объекты?

let n = +obj;
let delta = date1 - date2;
let greater = user1 > user2;

// к строке:
// вывод
console.log(obj);
// используем объект в качестве ключа
anotherObj[obj] = 123;


// Каков результат выполнения следующего кода?

let dwayne = {};

let daniel = {
  firstName: "Daniel",
};

let jason = {
  key: "jason",
};

dwayne[daniel] = 123;
dwayne[jason] = 456;

console.log(dwayne[daniel]);

// 456   [daniel] и [jason] преобрезаются в строку [object Object] и dwayne[jason] перезаписывается



// Каков результат выполнения следующего фрагмента кода?

console.log({ a: 1 } == { a: 1 });
console.log({ a: 1 } === { a: 1 });
// false
// false
// В JavaScript объекты сравниваются на основе ссылок.


// что нужно изменить или добавить, чтовы выполнялось следующее:

let user = {
  name: "John",
  money: 1000,
};

console.log(+user); 
console.log(user + 500); 

// Ответ:  //  {name: "John"} //  1000 // 1500
// нужно добавить в объект методы для преобразования объекта в строку или в число
// для хинта равного "string"


// для хинта равного "number" или "default"
valueOf() {
  return this.money;
}


//  а вот так что получится? 
let user = {
  name: "John",

  toString() {
    return this.name;
  }
};

console.log(user);  
console.log(user + 500);
// John // John500// потому что приведение к строкам



// что будет в консоли?

let obj = {
  toString() {
    return "2";
  }
};

console.log();(obj * 2);

// toString обрабатывает все преобразования в случае отсутствия других методов
// 4, объект был преобразован к примитиву "2", затем умножение сделало его числом
//   Если мы передаём объект в качестве аргумента, то в вычислениях будут две стадии:
// 1. Объект преобразуется в примитив (с использованием правил, описанных выше).
// 2. Если необходимо для дальнейших вычислений, этот примитив преобразуется дальше.


// ----------------------------------------------------------------------------------------------------------------------


// Не на объекты, просто интересная  задачка

let i = 10;
let arr = [];

while (i--) {
  arr.push(function () {
    return i + i;
  });
}
console.log([arr[0](), arr[1]()]);

// ответ
// [-2, -2]  в массив попадают 10 одинаковых функций, когда i доходит до 0 то цикл прекращает работу,
// но i все равно уменьшается на 1 так как постфиксная форма декремента (i--)



//  Что будет в консоли? ( 0 2 2)
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

// ----------------------------------------------------------------------------------------------------------------------




// 5. Что будет в консоли? // ответ С

const obj = { a: "one", b: "two", a: "three" };
console.log(obj);

// A: { a: "one", b: "two" }
// B: { b: "two", a: "three" }   
// C: { a: "three", b: "two" }    
// D: SyntaxError



// Каким будет результат?

function getInfo(member, year) {
  member.name = "Lydia";
  year = 1998;
}

const person = { name: "Sarah" };
const birthYear = "1997";

getInfo(person, birthYear);

console.log(person, birthYear);
// { name: "Lydia" }, "1997"   - не поняла, нужно разобраться




// Какое из перечисленных действий может модифицировать объект person?

const person = {
  name: 'Lydia Hallie',
  address: {
    street: '100 Main St',
  },
};

Object.freeze(person);

// A: person.name = "Evan Bacon"
// B: delete person.address
// C: person.address.street = "101 Main St"
// D: person.pet = { name: "Mara" }

// Ответ: C



// Что будет на выходе?

const person = {
	firstName: "Lydia",
	lastName: "Hallie",
	pet: {
		name: "Mara",
		breed: "Dutch Tulip Hound"
	},
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
};

console.log(person.pet?.name);
console.log(person.pet?.family?.name);
console.log(person.getFullName?.());
console.log(member.getLastName?.());

// Mara undefined Lydia Hallie undefined


