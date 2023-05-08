console.log("costruttori");

let person1 = {
  firstName: "John",
  lastName: "buck",
  address: "via sasso",
  email: "john@roccis.com",
  showCompleteName: function () {},
};

// funzione costruttore

const Person = function () {
  this.firstName = "";
  this.lastName = "";
  this.address = "";
  this.email = "";
  this.showCompleteName = function () {
    return "mi chiamo " + this.firstName + " " + this.lastName;
  };
};

let luigiPerson = new Person();

console.log(luigiPerson);

console.log(luigiPerson.showCompleteName());

const FilledPerson = function (firstName, lastName, address, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address || "";
  this.email = email || "";
  this.showCompleteName = function () {
    return "mi chiamo " + this.firstName + " " + this.lastName;
  };
};

let wario = new FilledPerson(
  "Wario",
  "Bros",
  "via de serv",
  "wario.bros@gmail.com"
);

console.log(wario.showCompleteName());
