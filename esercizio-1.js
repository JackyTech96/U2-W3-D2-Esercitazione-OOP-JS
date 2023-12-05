class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      console.log(`${this.firstName} è più vecchio di ${otherUser.firstName}`);
    } else if (this.age < otherUser.age) {
      console.log(`${this.firstName} è più giovane di ${otherUser.firstName}`);
    } else {
      console.log(`${this.firstName} ha la stessa età di ${otherUser.firstName}`);
    }
  }
}

const user1 = new User("Alice", "Rossi", 25, "Milano");
const user2 = new User("Mario", "Verdi", 30, "Roma");

user1.compareAge(user2);
