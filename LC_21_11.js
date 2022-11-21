// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

// The goal of this exercise is to convert a string to a new string where each character in the new string is "("
// if that character appears only once in the original string, or ")" if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.

// Цель этого упражнения — преобразовать строку в новую строку, где каждый символ в новой строке — \
// это «(»,  если этот символ встречается в исходной строке только один раз, или «)», если этот символ встречается в исходной строке более одного раза.
// Игнорировать заглавные буквы при определении, является ли символ дубликатом.

function duplicateEncode(word) {
  const chars = word.toLowerCase().split('');
  const counter = chars.reduce((acc, item) => {
    if (acc[item]) {
      acc[item]++;
    } else {
      acc[item] = 1;
    }
    return acc;
    }, {})
  
  return chars.map((item) => counter[item] > 1 ? ')' : '(').join('')

// _______________________________________________________________________________________________________________________________

// https://www.codewars.com/kata/5264d2b162488dc400000001

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Напишите функцию, которая принимает строку из одного или нескольких слов и возвращает ту же строку, 
// но с перевернутыми словами из пяти или более букв.
// Передаваемые строки будут состоять только из букв и пробелов. Пробелы будут включены только в том случае, 
// если присутствует более одного слова.

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}

// _______________________________________________________________________________________________________________________________

https://www.codewars.com/kata/541c8630095125aba6000c00

// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// // Цифровой корень — это рекурсивная сумма всех цифр числа.
// // Учитывая n, взять сумму цифр n. Если это значение имеет более одной цифры, продолжайте уменьшать таким образом, 
// пока не будет получено однозначное число. Ввод будет неотрицательным целым числом.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
  return (n - 1) % 9 + 1;
}

function digitalRoot(n) {
  n = n.toString().split('').reduce((sum, item) => sum + +item, 0);
  return n < 10 ? n : digitalRoot(n);
  }


// _______________________________________________________________________________________________________________________________


  // https://www.codewars.com/kata/520b9d2ad5c005041100000f

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// // Переместите первую букву каждого слова в конец, а затем добавьте «ay» в конец слова. Оставьте знаки препинания нетронутыми.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  return str
    .split(' ')
    .map((word) => '.,!?'.includes(word) ? word : word.slice(1) + word[0] + 'ay')
    .join(" ")
}


// _______________________________________________________________________________________________________________________________

// https://www.codewars.com/kata/52597aa56021e91c93000cb0

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  const arrNotZero = arr.filter(element => element !== 0);
  const arrZero = Array(arr.length - arrNotZero.length).fill(0);
  return arrNotZero.concat(arrZero)
}