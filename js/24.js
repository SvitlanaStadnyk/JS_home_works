class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Change code below this line
class Admin extends User {
  constructor({ AccessLevel }) {
    this.AccessLevel = AccessLevel;
  }
  static AccessLevel = { BASIC: "basic", SUPERUSER: "superuser" };
}

console.log(Admin.AccessLevel.BASIC);
console.log(Admin.AccessLevel.SUPERUSER);
