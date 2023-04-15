// [Конструктор заказа. Основы. learnjs 1.1..1.4]
// 1. написать функцию конструктор для заказа в магазине.
// Новый инстанс - новый заказ
// у него будут методы
// addItem(item, count) - добавить итем в чек (+ имя +цена)
// removeItem(item, count) - убрать из чека count итемов (если не указано сколько - убрать все). Нельзя убрать больше чем было в чеке
// getCheck() - получить информацию сколько каких итемов в чеке, общую цену, опционаольно цену за каждую позицию (за 3 пивка - 300р).
// Формат произвольный, чтобы был читабельный
// lockOrder() - после вызова метода.. функции addItem/removeItem не должны делать что-либо. Можно как-то сообщать об ошибке, можно просто молча.
// unlockOrder() - убрать блокировку заказа - снова можно добавлять итемы

// Формат item - объект с 1. названием итема 2. ценой за штуку. 2 итема с одинаковым именем считаем одной позицией в чеке

// 3. использовать отладку (debugger) при решении в хроме.
// Если получится без отладки - самому допустить ошибку и найти ее при отладке через интерфейс девтулзов

// this.check = {
//   beer: { price: 20, qty: 1 },
//   bread: { price: 10, qty: 2 },
// };

function Order() {
  this.check = {};
  this.isLocked = false;

  this.addItem = function (item, count) {
    //если count не задан, то считаем что он 1
    if (!count) {
      count = 1;

      //проверяем, заблочен ли заказ
    }
    if (this.isLocked) {
      throw Error("Order is locked");
    }

    const { name, price } = item;
    //проверяем, изменилась ли цена на товар
    if (this.check[name] && price !== this.check[name].price) {
      throw Error("Can not add item, price has changed");
    }

    //прибавляем если ли уже такой товар в чеке, обновляем количество товара
    const qty = (this.check[name]?.qty ?? 0) + count;
    this.check[name] = { price, qty };
  };

  this.removeItem = function (item, count) {
    //проверяем, заблочен ли заказ
    if (this.isLocked) {
      throw Error("Order is locked");
    }

    //проверяем, есть ли удаляемая позиция в чеке
    const { name } = item;
    if (!this.check[name]) {
      throw Error("Item not found in order");
    }

    //удаляем товар из чека, если его количество равно удаляемому или количество к удалению не задано
    const qty = this.check[name].qty;
    if (count === undefined || count === qty) {
      delete this.check[name];
      return;
    }

    //проверяем можем ли удалить требуемое количество товара
    if (count > qty) {
      throw Error(`Can not remove ${count} items. Current qty: ${qty}`);
    }

    //уменьшаем количество в заказе
    this.check[name].qty = qty - count;
  };

  this.getCheck = function () {
    //создаем массив из названий товаров
    const names = Object.keys(this.check);

    //создаем массив из строк для чека
    const rows = names.map((name) => {
      const { qty, price } = this.check[name];
      return `${qty} ${name} : $${qty * price}`;
    });

    //возвращаем чек
    return rows.join("\n");
  };

  this.lockOrder = function () {
    this.isLocked = true;
  };

  this.unlockOrder = function () {
    this.isLocked = false;
  };
}

const order = new Order();
const order2 = new Order();
const beer = {
  name: "beer",
  price: 10,
};

const milk = {
  name: "milk",
  price: 5,
};

order.addItem(beer, 10);
console.log(order.getCheck());
order.addItem(milk, 5);
console.log(order.getCheck());
order.removeItem(beer, 3);
console.log(order.getCheck());
order.removeItem(beer, 7);
console.log(order.getCheck());
order.removeItem(milk);
console.log(order.getCheck());

order2.addItem(milk, 2);
order2.addItem(milk, 2);
order2.addItem(milk, 2);
console.log(order2.getCheck());


this.addProduct = function(obj) {
  // Check if the shopping cart is locked
  if (this.isLocked) {
    return;
  }