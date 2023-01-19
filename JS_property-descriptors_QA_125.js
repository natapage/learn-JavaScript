// Свойства объекта помимо value имеют еще несколько атрибутов (флагов)

// writable – если true, свойство можно изменить, иначе оно только для чтения.
// enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
// configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.

let user = {
  name: "John",
};

//////// позволяет получить полную информацию о свойстве.
let descriptor = Object.getOwnPropertyDescriptor(user, "name");

alert(JSON.stringify(descriptor, null, 2));
// /* дескриптор свойства:
// {
//   "value": "John",
//   "writable": true,
//   "enumerable": true,
//   "configurable": true
// }

//////// позволяет изменить флаги
Object.defineProperty(obj, propertyName, descriptor);

let user = {};

Object.defineProperty(user, "name", {
  value: "John",
});

// при создании свойства объекта обычным способом (например записав в литерал объекта),
// все атрибуты дескриптора по умолчанию true

// при создании свойства объекта через defineProperty как в примере выше,
// все атрибуты дескриптора по умолчанию false

// Обратите внимание: configurable: false не даст изменить флаги свойства, а также не даст его удалить.
// При этом можно изменить значение свойства.

Object.defineProperties(obj, descriptors);
// позволяет определять множество свойств сразу.

Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  // ...
});

// клонирование объекта ВМЕСТЕ с дескрипторами свойствЖ

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
