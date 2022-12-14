//////////////////////// Деструктурирующее присваивание /////////////////////////////
// У нас есть объект:

let user = {
  name: "John",
  years: 30,
};

// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:

let { name, years: age, isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

//____________________________________________________________________________________________________________________

// У нас есть объект salaries с зарплатами:

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

function topSalary(salaries) {
  let result = { number: 0, name: null };
  for (const salary of Object.entries(salaries)) {
    let [name, number] = salary;
    if (number > result.number) {
      result.number = number;
      result.name = name;
    }
  }
  return result.name;
}

//____________________________________________________________________________________________________________________

////////////////////////////////////// date ///////////////////////////////////

// Создайте дату
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

// Для вывода используйте alert.

let date = new Date(2012, 1, 20, 3, 12);

alert(date);

//____________________________________________________________________________________________________________________

// Покажите день недели
// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// Например:

let date2 = new Date(2012, 0, 3); // 3 января 2012 года
alert(getWeekDay(date2)); // нужно вывести "ВТ"

function getWeekDay(date) {
  const daysOfWeek = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  const index = date.getDay();
  return daysOfWeek[index];
}

//____________________________________________________________________________________________________________________

// День недели в европейской нумерации
// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7).
//  Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

let date3 = new Date(2012, 0, 3); // 3 января 2012 года
alert(getLocalDay(date3)); // вторник, нужно показать 2

function getLocalDay(date) {
  const index = date.getDay();
  return !index ? index + 7 : index;
}

// или

function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) {
    day = 7;
  }
  return day;
}

//____________________________________________________________________________________________________________________

// Какой день месяца был много дней назад?

// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days=365 и больших значениях:

let date4 = new Date(2015, 0, 2);

alert(getDateAgo(date4, 1)); // 1, (1 Jan 2015)
alert(getDateAgo(date4, 2)); // 31, (31 Dec 2014)
alert(getDateAgo(date4, 365)); // 2, (2 Jan 2014)
// P.S. Функция не должна изменять переданный ей объект date.

function getDateAgo(date, days) {
  let dateInPast = new Date(date);
  dateInPast.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

// или

function getDateAgo(date, days) {
  const dateInPast = new Date(date - days * 24 * 60 * 60 * 1000);
  return dateInPast.getDate();
}
//____________________________________________________________________________________________________________________

// Последнее число месяца?
// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

// Параметры:

// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

// моё

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1);
  return date.getDate(date.setDate(0));
}

// или проще (добавить день 0 сразу):

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

//____________________________________________________________________________________________________________________

// Сколько сегодня прошло секунд?
// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000; // (3600 * 10)

// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let diff = now - today; // разница в миллисекундах
  return Math.round(diff / 1000); // получаем секунды
}

alert(getSecondsToday());

//____________________________________________________________________________________________________________________

// Сколько секунд осталось до завтра?
// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600;

// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return Math.round((tomorrow - now) / 1000);
}

//____________________________________________________________________________________________________________________

// Форматирование относительной даты
// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
// Например:

console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));

function formatDate(date) {
  const now = new Date();
  const interval = now - date;

  if (interval < 1000) {
    return "прямо сейчас";
  } else if (interval < 1000 * 60) {
    return interval / 1000 + " сек. назад";
  } else if (interval < 1000 * 3600) {
    return interval / 60000 + " мин. назад";
  } else {
    let d = date;
    d = [
      "0" + d.getDate(),
      "0" + (d.getMonth() + 1),
      "" + d.getFullYear(),
      "0" + d.getHours(),
      "0" + d.getMinutes(),
    ].map((component) => component.slice(-2));
    return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
  }
}

//____________________________________________________________________________________________________________________

// Деструктурирующее присваивание – это специальный синтаксис,
//который позволяет нам «распаковать» массивы или объекты в несколько переменных, так как иногда они более удобны.

let arr = ["Ilya", "Kantor"];
let [firstName, surname] = arr;

//  или
let [firstName, surname] = "Ilya Kantor".split(" ");

// второй элемент не нужен
let [firstName, , title] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];

// справа может быть любой перебираемый объект

let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);

// можно присвоить свойству объекта:

let user = {};
[user.name, user.surname] = "Ilya Kantor".split(" ");

Мы можем использовать его с деструктуризацией для цикличного перебора ключей и значений объекта:

let user = {
  name: "John",
  age: 30
};

for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, затем age:30
}


let guest = "Jane";
let admin = "Pete";

// Давайте поменяем местами значения: сделаем guest = "Pete", а admin = "Jane"
[guest, admin] = [admin, guest];


let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest это массив элементов, начиная с 3-го
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2


let [firstName, surname] = [];

alert(firstName); // undefined
alert(surname); // undefined


// Значения по умолчанию могут быть гораздо более сложными выражениями или даже функциями. Они выполняются, только если значения отсутствуют.

// Например, здесь мы используем функцию prompt для указания двух значений по умолчанию.

// prompt запустится только для surname
let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];

alert(name);    // Julius (из массива)
alert(surname); // результат prompt


//____________________________________________________________________________________________________________________

new Date(year, month, date, hours, minutes, seconds, ms)

// Из таймстампа всегда можно получить дату с помощью 
// new Date(timestamp) и преобразовать существующий объект Date в таймстамп, используя метод 
date.getTime() // преобразовать существующий объект Date в таймстамп

setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds) (устанавливает дату в виде целого количества миллисекунд, прошедших с 01.01.1970 UTC)

getTime()
// Для заданной даты возвращает таймстамп – количество миллисекунд, прошедших с 1 января 1970 года UTC+0.

getTimezoneOffset()
// Возвращает разницу в минутах между UTC и местным часовым поясом:

Метод Date.parse(str) считывает дату из строки.

// Формат строки должен быть следующим: YYYY-MM-DDTHH:mm:ss.sssZ, где:

YYYY-MM-DD – это дата: год-месяц-день.
// Символ "T" используется в качестве разделителя.
// HH:mm:ss.sss – время: часы, минуты, секунды и миллисекунды.
// Необязательная часть 'Z' обозначает часовой пояс в формате +-hh:mm. Если указать просто букву Z, то получим UTC+0.
// Возможны и более короткие варианты, например, YYYY-MM-DD или YYYY-MM, или даже YYYY.

// Вызов Date.parse(str) обрабатывает строку в заданном формате и возвращает таймстамп (количество миллисекунд с 1 января 1970 года UTC+0). Если формат неправильный, возвращается NaN.