// Создайте простую функцию, которая принимает два числа в качестве аргументов и возвращает их сумму.
// Добавьте типизацию для аргументов и возвращаемого значения.

function getSum(a: number, b: number): number {
  return a + b;
}

// // Создайте интерфейс Person, который содержит свойства name и age соответствующего типа.
// // Затем создайте массив, содержащий объекты типа Person. Добавьте несколько элементов в массив и выведите их свойства в консоль.

interface Person {
  name: string;
  age: number;
}

let arr: Array<Person> = [];
arr.push({ name: "bob", age: 25 });
console.log(arr);

// // Создайте класс Car, который имеет свойства brand, model и year соответствующего типа.
// // Добавьте метод start(), который выводит сообщение о запуске автомобиля в консоль.
// // Создайте экземпляр класса и вызовите метод start().

class Car {
  brand: string;
  model: string;
  year: number;
  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  start(): void {
    console.log("started");
  }
}

const carItem = new Car("bmw", "x6", 2018);
console.log(carItem);
console.log(carItem.start());

// Напишите функцию, которая принимает массив чисел в качестве аргумента и возвращает новый массив,
// содержащий только уникальные значения.
// Добавьте типизацию для аргумента и возвращаемого значения.

function getUnique<T>(arr: Array<T>): Array<T> {
  return Array.from(new Set(arr));
}

// Создайте перечисление (enum) Color, которое содержит значения Red, Green и Blue.
// Затем создайте переменную, которая может принимать только значения из перечисления Color.
// Попробуйте присвоить этой переменной различные значения из перечисления и выведите их в консоль.

enum Color {
  Red,
  Green,
  Blue,
}

let color: Color = Color.Red;
console.log(color);

// Создайте интерфейс Shape, который имеет метод calculateArea() без реализации.
//  Затем создайте классы Circle и Rectangle, которые реализуют интерфейс Shape и определяют свою собственную реализацию метода calculateArea().
//  Создайте экземпляры классов и вызовите метод calculateArea() для каждого из них.

interface Shape {
  calculateArea(): number;
}

class Circle implements Shape {
  radius: number;
  constructor(r: number) {
    this.radius = r;
  }
  calculateArea() {
    return this.radius ** 2 * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}
  calculateArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(5, 10);

console.log(circle.calculateArea());
console.log(rectangle.calculateArea());

// Создайте функцию, которая принимает два аргумента: объект типа { name: string } и строку.
// Функция должна возвращать новый объект, в котором свойство name заменено на переданную строку.
// Добавьте типизацию для аргументов и возвращаемого значения.

interface Obj {
  name: string;
}

function createObj(obj: Obj, str: string): Obj {
  const objResult: Obj = { name: str };
  return objResult;
}

// Напишите функцию, которая принимает объект со свойством length (число) и методом getItem(index: number),
// возвращающим элемент по индексу. Добавьте типизацию для аргумента и возвращаемого значения метода.

interface Obj2 {
  length: number;
  getItem<T>(index: number): T;
}

function getElement<T>(obj: Obj2, n: number): T {
  return obj.getItem(n);
}

// Создайте интерфейс User, который содержит свойства name и email соответствующего типа.
// Затем создайте тип Admin, который расширяет интерфейс User и добавляет свойство isAdmin типа boolean.

interface User {
  name: string;
  email: string;
}

interface Admin extends User {
  isAdmin: boolean;
}
