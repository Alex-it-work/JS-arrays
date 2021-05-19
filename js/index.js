"use strict";
// 0 Создать числовой массив и проинициализировать его (*случайными числами).
// признаюсь, наткнулся в интернетах на такую форму записи создания одномерного массива
// Array.from({ length: 40 }, () => Math.floor(Math.random() * 40));
// просмотрел в MDN синтаксис, разобрал как работает , поэтому решил что могу применить в дз

const randomArray = createRandomArray(15);
showArray(randomArray);

/**
 *
 * @param {number} arrayLenght
 * @returns {Array} random integer (from 0, to arrayLenght) array
 */
function createRandomArray(arrayLenght) {
  return Array.from({ length: arrayLenght }, () =>
    Math.floor(Math.random() * arrayLenght)
  );
}
// Альтернативное решение:
// function createRandomArray(arrayLenght) {
//   const newArray = [];
//   for (let i = 0; i < arrayLenght; i++) {
//     newArray.push(Math.floor(Math.random() * arrayLenght));
//   }
//   return newArray;
// }
function showArray(arr) {
  console.table(arr);
}

// 1 Удалить последний элемент из массива, добавить по элементу в начало и конец.
randomArray.pop();
showArray(randomArray);
randomArray.unshift(0);
showArray(randomArray);
randomArray.push(0);
showArray(randomArray);

// 2 Вывести размер массива.
console.log("randomArray.length :>> ", randomArray.length);

// 3 Вывести элементы с четными индексами.
console.log("3 Вывести элементы с четными индексами.");

for (let i = 2; i < randomArray.length; i += 2) {
  console.log(`randomArray[${i}] = ${randomArray[i]}`);
}

// 4 Вывести только четные элементы (четные числа делятся на 2 без остатка).
console.log(
  "4 Вывести только четные элементы (четные числа делятся на 2 без остатка)."
);

for (let i = 0; i < randomArray.length; i++) {
  if (randomArray[i] !== 0 && randomArray[i] % 2 === 0) {
    console.log(`randomArray[${i}] = ${randomArray[i]}`);
  }
}

// 5 Вывести индексы нулевых элементов (элемент равен нулю).
console.log("5 Вывести индексы нулевых элементов (элемент равен нулю).");

for (let i = 0; i < randomArray.length; i++) {
  if (randomArray[i] === 0) {
    console.log(`randomArray[${i}] = ${randomArray[i]}`);
  }
}

// 6 Подсчитать количество нулевых элементов.
console.log("6 Подсчитать количество нулевых элементов.");

let counter = 0;
for (let i = 0; i < randomArray.length; i++) {
  if (randomArray[i] === 0) {
    counter++;
  }
}
console.log("counter 0:>> ", counter);

// // Методы перебора массивов.
// 7 Получить новый массив из заданного, который будет содержать только положительные числа (-1, 5, 0, 9, -10 => 5, 9).
console.log(
  "7 Получить новый массив из заданного, который будет содержать только положительные числа"
);

const positiveNegativeValuesArray = [];

randomArray.forEach(function (item) {
  //   item = Math.random() < 0.5 ? item - 2 * item : item;
  if (Math.random() < 0.5) {
    item -= 2 * item;
  }
  positiveNegativeValuesArray.push(item);
});

showArray(positiveNegativeValuesArray);

const positiveValuesArray = [];
randomArray.forEach(function (item) {
  if (item > 0) {
    positiveValuesArray.push(item);
  }
});

showArray(positiveValuesArray);

// 8 Получить новый массив их заданного, который будет содержать все элементы исходного,
// возведенные в квадрат (-1, 5, 0, 9, -10 => 1, 25, 0, 81, 100).
console.log(
  "// 8 Получить новый массив их заданного, который будет содержать все элементы исходного, возведенные в квадрат (-1, 5, 0, 9, -10 => 1, 25, 0, 81, 100)."
);

const powTwoArray = [];
positiveNegativeValuesArray.forEach(function (item) {
  powTwoArray.push(item ** 2);
});

showArray(powTwoArray);
// 9 Проверить, являются ли все елементы массива положительными числами (* или в принципе числами).
// Array.prototype.every()
console.log(
  "positiveNegativeValuesArray only positive? :>> ",
  positiveNegativeValuesArray.every((currentValue) => currentValue > 0)
);

console.log(
  "positiveValuesArray only positive? :>> ",
  positiveValuesArray.every((currentValue) => currentValue > 0)
);
const nanArray = Array.from("Darling69");
showArray(nanArray);
console.log(
  "nanArray has only numbers? :>> ",
  nanArray.every((currentValue) => !isNaN(currentValue))
);
console.log(
  "randomArray has only numbers? :>> ",
  randomArray.every((currentValue) => !isNaN(currentValue))
);
// 10 Проверить, есть ли в массиве хоть один отрицательный элемент.

console.log(
  "positiveNegativeValuesArray has one or more negative value? :>> ",
  positiveNegativeValuesArray.some((currentValue) => currentValue < 0)
);

console.log(
  "positiveValuesArray has one or more negative value? :>> ",
  positiveValuesArray.some((currentValue) => currentValue < 0)
);

// 11 Вывести элементы массива, возведенные в куб.
randomArray.forEach((currentValue) =>
  console.log("Math.pow(currentValue, 3) :>> ", Math.pow(currentValue, 3))
);

// *12 Прописать для MyArray метод unshift.

function MyArray() {
  if (!new.target) {
    return new MyArray();
  }
  this.length = 0;
}

const myArrayProto = new MyArray();
myArrayProto.unshift = function (item) {
  for (let i = this.length; i >= 0; i--) {
    i === 0 ? (this[0] = item) : (this[i] = this[i - 1]);
  }
  return ++this.length;
};

myArrayProto.push = function (item) {
  this[this.length] = item;
  return ++this.length;
};

MyArray.prototype = myArrayProto;

const testArray = new MyArray();
for (let i = 0; i < 5; i++) {
  testArray.push(Math.floor(Math.random() * 5));
}

showArray(testArray);
testArray.unshift(Math.floor(Math.random() * testArray.length));
showArray(testArray);
