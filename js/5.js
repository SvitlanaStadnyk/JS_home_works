function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach(function (test) {
    if (test > value) {
      filteredNumbers.push(test);
    }
  });

  return filteredNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 3));
// возвращает[4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4));
// возвращает[5]
console.log(filterArray([1, 2, 3, 4, 5], 5));
// возвращает[]
console.log(filterArray([12, 24, 8, 41, 76], 38));
//  возвращает[41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20));
//  возвращает[24, 41, 76]
