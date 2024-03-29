//  waterAmount количество воды в чайнике
//  temperature температура воды
//  #isPlugged включен ли чайник в сеть
//  #isOn - включен ли чайник в режим кипечения

// turnOn() включить кипячение
// turnOff() выключить кипячение
// plugIn() включить в сеть чайник
// plugOff() выключить из сети чайник
// addWater(ml) налить воды в чайник
// removeWater(ml) вылить воды из чайника
// isOkWaterLevel() проверить уровень воды в чайнике
// #warmUp() нагрев и кипячение чайника

class Teapot {
  #isPlugged = false;
  #isOn = false;
  #roomTemp = 23;
  #teapotVolume = 1500;
  waterTemp = 23;
  waterAmount = 0;

  turnOn() {
    // попытка включить выключенный из сети чайник
    if (!this.#isPlugged) {
      throw new Error("Включите чайник в розетку");
    }

    //поптытка включить включенный чайник
    if (this.#isOn) {
      throw new Error("Чайник уже включён");
    }

    // попытка включить пустой или переполненный чайник
    if (!this.isOkWaterAmount) {
      throw new Error("Проверьте уровень воды в чайнике");
    }

    // включаем чайник корректно
    this.#isOn = true;
    this.#warmUp();
  }

  turnOff() {
    // попытка выключить выключенный чайник
    if (!this.#isOn) {
      throw new Error("Чайник уже выключён из сети");
    }
    this.#isOn = false;

    // остывание, если чайник был теплый
    // if (this.waterTemp > this.#roomTemp) {
    //   this.#coolingDown();
    // }
  }

  plugIn() {
    // попытка включить сеть уже включеннй в сеть чайник
    if (this.#isPlugged) {
      throw new Error("Чайник уже включён в сети");
    }
    this.#isPlugged = true;
  }

  plugOff() {
    // попытка выключить из сети выключенный из сети чайник
    if (!this.#isPlugged) {
      throw new Error("Чайник уже выключён из сети");
    }

    this.#isPlugged = false;
    this.#isOn = false;

    // остывание, если чайник был теплый
    if (this.waterTemp > this.#roomTemp) {
      this.#coolingDown();
    }
  }

  addWater(ml) {
    if (typeof ml === "number") {
      if (ml <= 0) throw new Error("Количество воды должно быть больше 0");
      this.waterAmount += ml;

      if (this.waterAmount > this.#teapotVolume) {
        this.waterAmount = this.#teapotVolume;
        console.log("Влезло только 1.5 литра, остальное придётся вытереть");
      }
    }
  }

  removeWater(ml) {
    if (this.waterAmount > ml) {
      this.waterAmount -= ml;
    } else {
      this.waterAmount = 0;
    }
  }

  get isOkWaterAmount() {
    if (this.waterAmount === 0 || this.waterAmount > this.#teapotVolume)
      return false;
    return true;
  }

  #warmUp() {
    if (!this.#isOn) {
      console.log("Ваш чайник не успел вскипеть");
      return;
    }
    if (this.waterTemp === 100) {
      console.log(this.waterTemp);
      console.log("Ваш чайник вскипел и начинает остывать");
      this.turnOff();
      this.#coolingDown();
      return;
    }
    setTimeout(() => {
      this.waterTemp++;
      this.#warmUp();
    }, 100);
    console.log(this.waterTemp);
  }

  #coolingDown() {
    if (this.#isOn) {
      return;
    }
    if (this.waterTemp <= this.#roomTemp) {
      console.log("Ваш чайник остыл");
      return;
    }
    setTimeout(() => {
      this.waterTemp--;
      this.#coolingDown();
    }, 200);
    console.log(this.waterTemp);
  }
}

const teapot = new Teapot();

// попробуем вскипятить без приключений
// console.log(teapot.plugIn());
// console.log(teapot.addWater(500));
// console.log(teapot.turnOn());

// // попробуем вскипятить выключенный из сети чайник
// console.log(teapot.addWater(500));
// console.log(teapot.turnOn());

// // попробуем выключить чайник в процессе кипячения
// console.log(teapot.plugIn());
// console.log(teapot.addWater(500));
// console.log(teapot.turnOn());
// setTimeout(() => teapot.turnOff(), 1000);

// // попробуем налить 2 л в чайник объемом 1.5 литра
// console.log(teapot.addWater(2000));

// //попробуем включить включенный чайник (просто продолжается кипечение + уведомление)
// console.log(teapot.plugIn());
// console.log(teapot.addWater(500));
// console.log(teapot.turnOn());
// console.log(teapot.turnOn());

// // попробуем убавить воды больше чем есть в чайнике ()
// console.log(teapot.addWater(500));
// console.log(teapot.removeWater(600));
// console.log(teapot.waterAmount);

// //попробуем вскипятить неостывший чайник
// console.log(teapot.plugIn());
// console.log(teapot.addWater(500));
// console.log(teapot.turnOn());
// setTimeout(() => teapot.turnOn(), 13000);
