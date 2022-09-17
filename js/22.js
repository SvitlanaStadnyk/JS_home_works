class User {
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  // Геттер email
  get email() {
    return this.#email;
  }

  // Сеттер email
  set email(newEmail) {
    this.#email = newEmail;
  }

  set email(newEmail) {
    if (newEmail === "") {
      console.error("Ошибка! Почта не может быть пустой строкой!");
      return;
    }

    this.#email = newEmail;
  }
}
const mango = new User({ name: "Mango", email: "mango@mail.com" });
console.log(mango.email); // mango@mail.com
mango.email = "mango@supermail.com";
console.log(mango.email); // mango@supermail.com
