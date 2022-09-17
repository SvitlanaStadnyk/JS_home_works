function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

  firstArray.forEach(function (test) {
    if (secondArray.includes(test)) commonElements.push(test);
  });
  // for (let i = 0; i < firstArray.length; i += 1) {
  //   if (secondArray.includes(firstArray[i])) {
  //     commonElements.push(firstArray[i]);
  //   }
  // }

  return commonElements;
  // Change code above this line
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
// возвращает[2]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// возвращает[1, 2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// возвращает[12, 27, 3]
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// возвращает[10, 30, 40]
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// возвращает[]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
