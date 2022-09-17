class Car {
  static Prices = {
    MAX_PRICE: 50000,
  };
  // Change code below this line
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice > this.MAX_PRICE) {
      return;
    } else {
      this.#price = newPrice;
    }
  }
}

// Change code above this line

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000
