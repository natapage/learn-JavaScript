Object.create(proto, [descriptors]); // – создаёт пустой объект со свойством [[Prototype]], указанным как proto, и необязательными дескрипторами свойств descriptors.
Object.getPrototypeOf(obj); //– возвращает свойство [[Prototype]] объекта obj.
Object.setPrototypeOf(obj, proto); //– устанавливает свойство [[Prototype]] объекта obj как proto.

// клон obj c тем же прототипом (с поверхностным копированием свойств)
let clone = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);
// Такой вызов создаёт точную копию объекта obj, включая все свойства: перечисляемые и неперечисляемые,
// геттеры/сеттеры для свойств – и всё это с правильным свойством [[Prototype]].

// __________________________________________________________________________________________________

// Добавьте toString в словарь
// Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.

// Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой.
// Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.

let dictionary = Object.create(null, {
  toString: {
    // определяем свойство toString
    value() {
      // значение -- это функция
      return Object.keys(this).join();
    },
  },
});

// Когда мы создаём свойство с помощью дескриптора, все флаги по умолчанию имеют значение false.
// Таким образом, в коде выше dictionary.toString – неперечисляемое свойство.

dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for (let key in dictionary) {
  alert(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
alert(dictionary); // "apple,__proto__"

// __________________________________________________________________________________________________

// Разница между вызовами
// Давайте создадим новый объект rabbit:

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

// Все эти вызовы делают одно и тоже или нет?

rabbit.sayHi(); // Rabbit
Rabbit.prototype.sayHi(); // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi(); // undefined

// В первом вызове this == rabbit, во всех остальных this равен Rabbit.prototype, так как это объект перед точкой.
