btn.onclick = function () {
  console.log("кнопка работает");
};

// код ниже перезапишет событие

btn.onclick = function () {
  console.log("перезаписано");
};

// чтобы можно было добавлять несколько событий нужен обработчик

function handler1() {
  alert("Спасибо!");
}

function handler2() {
  alert(event.type); // пожно посмотреть свойство объекта события event
  console.log(event); // или весь объект события
}

btn.addEventListener("click", handler1);

btn2.addEventListener("click", handler2);

// Есть три способа назначения обработчиков событий:
// Атрибут HTML: onclick="...".
// DOM-свойство: elem.onclick = function.
// Специальные методы: elem.addEventListener(event, handler[, phase]) для добавления, removeEventListener для удаления. - поддерживает методы объекта в качестве handler

// __________________________________________________________________________________________________________________

// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

function clearText() {
  text.hidden = true;
}

btn3.addEventListener("click", clearText);

// __________________________________________________________________________________________________________________

// Создайте кнопку, которая будет скрывать себя по нажатию.

btn4.addEventListener("click", () => (btn4.hidden = true));

// __________________________________________________________________________________________________________________

// В переменной button находится кнопка. Изначально на ней нет обработчиков.
// Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?
// button.addEventListener("click", () => alert("1"));
// button.removeEventListener("click", () => alert("1"));
// button.onclick = () => alert(2);

// сработает 1 ( потому что еще не удален ) и потом 2
// remove - не работает, так как туда должна быть передана ссылка на ту же самую функцию что и в addEvent
// button.onclick сработает независимо от addEventListener.

// __________________________________________________________________________________________________________________

//Пусть мяч перемещается при клике на поле, туда, куда был клик

field.onclick = function (event) {
  // координаты поля относительно окна браузера
  let fieldCoords = this.getBoundingClientRect();

  // мяч имеет абсолютное позиционирование (position:absolute), поле - относительное (position:relative)
  // таким образом, координаты мяча рассчитываются относительно внутреннего, верхнего левого угла поля
  let ballCoords = {
    top:
      event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
    left:
      event.clientX -
      fieldCoords.left -
      field.clientLeft -
      ball.clientWidth / 2,
  };

  // запрещаем пересекать верхнюю границу поля
  if (ballCoords.top < 0) ballCoords.top = 0;

  // запрещаем пересекать левую границу поля
  if (ballCoords.left < 0) ballCoords.left = 0;

  // // запрещаем пересекать правую границу поля
  if (ballCoords.left + ball.clientWidth > field.clientWidth) {
    ballCoords.left = field.clientWidth - ball.clientWidth;
  }

  // запрещаем пересекать нижнюю границу поля
  if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    ballCoords.top = field.clientHeight - ball.clientHeight;
  }

  ball.style.left = ballCoords.left + "px";
  ball.style.top = ballCoords.top + "px";
};

// __________________________________________________________________________________________________________________

// Создать меню, которое по нажатию открывается либо закрывается:

let menuElem = document.getElementById("sweeties");
let titleElem = menuElem.querySelector(".title");

titleElem.onclick = function () {
  menuElem.classList.toggle("open");
};

// __________________________________________________________________________________________________________________
// Поведение: «Счётчик»
// Например, здесь HTML-атрибут data-counter добавляет кнопкам поведение: «увеличить значение при клике»:

document.addEventListener("click", function (event) {
  if (event.target.dataset.counter != undefined) {
    event.target.value++;
  }
});

// __________________________________________________________________________________________________________________
// Поведение: «Переключатель» (Toggler)
// Ещё один пример поведения. Сделаем так, что при клике на элемент с атрибутом data-toggle-id будет скрываться/показываться элемент с заданным id:

document.addEventListener("click", function (event) {
  let id = event.target.dataset.toggleId;
  if (!id) return;
  let elem = document.getElementById(id);
  elem.hidden = !elem.hidden;
});

// делегирование событий:
// Алгоритм:

// Вешаем обработчик на контейнер.
// В обработчике проверяем исходный элемент event.target.
// Если событие произошло внутри нужного нам элемента, то обрабатываем его.
