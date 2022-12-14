// какими типами данных могут быть имена свойств объектов
// объекты и примитивы, в чем отличие
// ключевое слово this
// цикл for in и символы

// какими типами данных могут быть имена свойств объектов

// По спецификации, в качестве ключей для свойств объекта могут использоваться только строки или символы.
// Ни числа, ни логические значения не подходят, разрешены только эти два типа данных.
// Точка требует, чтобы ключ был именован по правилам именования переменных.
// То есть не имел пробелов, не начинался с цифры и не содержал специальные символы, кроме $ и _.
// Иными словами, нет никаких ограничений к именам свойств. Они могут быть в виде строк или символов
// (специальный тип для идентификаторов, который будет рассмотрен позже).
// Все другие типы данных будут автоматически преобразованы к строке.
// Например, если использовать число 0 в качестве ключа, то оно превратится в строку "0":

// объекты и примитивы, в чем отличие

// Тип object (объект) – особенный.
// Все остальные типы называются «примитивными», потому что их значениями могут быть только простые значения
// (будь то строка, или число, или что-то ещё).
// В объектах же хранят коллекции данных или более сложные структуры.
// Примитив – значение «примитивного» типа.
// Есть 7 примитивных типов: string, number, boolean, symbol, null, undefined и bigint.
// 
// Объект может хранить множество значений как свойства.
// Объявляется при помощи фигурных скобок {}, например: {name: "Рома", age: 30}.
//  В JavaScript есть и другие виды объектов: например, функции тоже являются объектами.

// ключевое слово this  (уже сдала эту тему Артёму)

// Что такое this? this указывает на объект, который выполняет текущий кусок JavaScript-кода.
// Другими словами, this – это ссылка на текущий контекст выполнения.
// Для доступа к информации внутри объекта метод может использовать ключевое слово this.
// Поведение ключевого слова this зависит от контекста,
// в котором оно используется, и от того, в каком режиме оно используется - строгом или нестрогом.


{
  "use strict";
  log(this); // window
}

function test() {
  log(this) // window
}

function testuseStrict() {
  "use strict" 
  log(this); // undefined   МОЖЕТ БЫТЬ ТОЛЬКО В ФУНКЦИЯХ С РЕЖИМОМ ЮЗСТРИКТ


// цикл for in и символы

// Символы игнорируются циклом for…in
