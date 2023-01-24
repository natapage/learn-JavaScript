//
// Реализуйте класс Worker (Работник), который будет иметь следующие свойства:
// name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).
// Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение
// (умножение) ставки rate на количество отработанных дней days.

class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return this.rate * this.days;
  }
}

let test = new Worker("jon", "lennon", 20, 5);
console.log(test.getSalary());

// ____________________________________________________________________________________________

// Реализуйте класс MyString, который будет иметь следующие методы: метод
// reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод
// ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод

class myString {
  constructor(string) {
    this.string = string;
  }

  reverse() {
    return this.string.split("").reverse().join("");
  }
  ucFirst() {
    return (
      this.string[0].toUpperCase() + this.string.split("").slice(1).join("")
    );
  }
}

let obj = new myString("abcd");
console.log(obj.reverse());
console.log(obj.ucFirst());

// ____________________________________________________________________________________________
