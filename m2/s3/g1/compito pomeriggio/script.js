console.log("ciao");

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  confrontAges(age) {
    if (this.age > age) {
      console.log(this.firstName + " è più vecchio");
    } else {
      console.log(this.firstName + " è più giovane");
    }
  }
}

let marco = new User("Marco", "Paglianiti", 25, "Palermo");

marco.confrontAges(37);

let form = document.getElementById("main-form");

form.addEventListener("submit", (e) => e.preventDefault());

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  sameOwner = function (name) {
    if (this.ownerName === name) {
      return true;
    } else {
      return false;
    }
  };
}

let pets = [];

const fillPets = function () {
  let petName = document.getElementById("name");
  let ownerName = document.getElementById("owner-name");
  let specie = document.getElementById("specie");
  let breed = document.getElementById("breed");

  let newPet = new Pet(
    petName.value,
    ownerName.value,
    specie.value,
    breed.value
  );

  console.log(newPet);

  pets.push(newPet);
  console.log(pets);

  console.log(pets[1].sameOwner("Tommaso"));
};
