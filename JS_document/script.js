let test = document.getElementById("word");
test.style.background = "red";

let elements = document.querySelectorAll("span");

for (element of elements) {
  element.style.background = "green";
}

let myName = document.querySelector(".natus");
console.log(myName.innerText);

console.log(document.body.innerText);
// innerHTML - HTML-содержимое элемента в виде строки. вернёт все что между скобками тега, включая теги внутри выбранного.
// innerText -вернёт только текст между тегами,даже если внутри будут другие теги

// querySelector, querySelectorAll - ищет по сss селекторам ( тег, название класса с ., id с решеткой)

// Как найти?…

// Таблицу с id="age-table"    -  document.getElementById("age-table");
// Все элементы label внутри этой таблицы (их три). document.querySelectorAll('#age-table label')
// Первый td в этой таблице (со словом «Age»).  table.querySelector('td')
// Форму form с именем name="search". let form = document.getElementsByName('search')[0]
// Первый input в этой форме.  form.querySelector('input')
// Последний input в этой форме. let inputs = form.querySelectorAll('input') // найти все input
// inputs[inputs.length - 1];

test.id = "newWord"; // меняем html атрибус через свойство объекта js
test.style.background = "blue";
console.log(test.getAttribute("id"));

// Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.
let elem = document.body.querySelector("[data-widget-name]");
console.log(elem.dataset.widgetName);

let elem2 = document.body.querySelector("id");

// Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.

// Ссылка является внешней, если:

// Её href содержит ://
// Но не начинается с http://internal.com.

const linkList = document.querySelectorAll("a");

for (const link of linkList) {
  const href = link.getAttribute("href");
  if (!href) continue; // нет атрибута

  if (!href.includes("://")) continue; // нет протокола

  if (href.startsWith("http://internal.com")) continue; // внутренняя

  link.style.color = "orange";
}

// создаем dom-узел, добавляем ему атрибуты и содержимое и вставляем
let div = document.createElement("div");
div.className = "testdiv";
div.innerHTML = "тестовый дивчик";
document.body.append(div);

// elem.insertAdjacentHTML(where, html)  вставка по отношению к elem

// Первый параметр – это специальное слово, указывающее, куда по отношению к elem производить вставку. Значение должно быть одним из следующих:

// "beforebegin" – вставить html непосредственно перед elem,
// "afterbegin" – вставить html в начало elem,
// "beforeend" – вставить html в конец elem,
// "afterend" – вставить html непосредственно после elem.
// Второй параметр – это HTML-строка, которая будет вставлена именно «как HTML».

// Например:

// <div id="div"></div>
// <script>
//   div.insertAdjacentHTML('beforebegin', '<p>Привет</p>');
//   div.insertAdjacentHTML('afterend', '<p>Пока</p>');
// </script>

// elem.cloneNode(true) - клонирование узла
// node.remove() - удаление узла

// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.

function clear(elem) {
  elem.innerHTML = "";
}

clear(elemNew);
