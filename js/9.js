// Change code below this line
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
};
// Change code above this line

console.log(calculateTotalPrice([12, 85, 37, 4]));
//  возвращает 138
console.log(calculateTotalPrice([164, 48, 291]));
//  возвращает 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
//  возвращает 1116
