class FilledPerson {
  constructor(firstName, lastName, address, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.email = email;
  }

  game = "Super Mario Bros";

  sayHello() {
    return "Hello my name is " + this.firstName + " " + this.lastName;
  }
}

let toad = new FilledPerson(
  "Toad",
  "Super Mario",
  "via Super",
  "toad@gmail.com"
);

console.log(toad.sayHello());
