class Car {
  // Change code below this line
  // Синтаксис объявления метода класса
  constructor(brand, model, price) {
    // Инициализация свойств экземпляра
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  // Change code above this line
}
console.log(new Car("Audi", "Q3", 36000));
//  получится объект { brand: "Audi", model: "Q3", price: 36000 }
console.log(new Car("BMW", "X5", 58900));
//  получится объект { brand: "BMW", model: "X5", price: 58900 }
console.log(new Car("Nissan", "Murano", 31700));
//  получится объект { brand: "Nissan", model: "Murano", price: 31700 }
