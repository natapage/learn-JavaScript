// Необходимо реализовать функцию, принимающую в аргументах строку,
// состоящую из букв и вернуть новую строку,
// в которой повторяющиеся буквы заменены количеством повторений.

// Например:

// ('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD');
// => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'

function replaceLetters(str) {
  let result = [];
  let strArr = str.split("");
  let counter = 1;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === str[i + 1]) {
      counter += 1;
      continue;
    }
    if (strArr[i] !== strArr[i + 1]) {
      if (counter > 1) {
        result.push(strArr[i]);
        result.push(counter);
        counter = 1;
        continue;
      }
      result.push(strArr[i]);
    }
  }

  return result.join("");
}

let str = "AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD";
console.log(replaceLetters(str));
