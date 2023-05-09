let contactList = [];

const nameField = document.getElementById("name");
const surnameField = document.getElementById("surname");
const phoneField = document.getElementById("phone");

const saveButton = document.getElementById("save-button");

const renderList = function () {
  let list = document.querySelector("ul");
  list.innerHTML = "";

  contactList.forEach((contact) => {
    const newLi = document.createElement("li");
    newLi.innerText =
      contact.name + " " + contact.surname + " | " + contact.phone;
    list.appendChild(newLi);
  });
};

saveButton.addEventListener("click", function (e) {
  //   console.log("cioa");
  e.preventDefault();
  const newUser = {
    name: nameField.value,
    surname: surnameField.value,
    phone: phoneField.value,
  };

  console.log(newUser);
  contactList.push(newUser);

  const contactsArrayAsAString = JSON.stringify(contactList);
  console.log(contactsArrayAsAString);
  localStorage.setItem("contactsArray", contactsArrayAsAString);

  nameField.value = "";
  surnameField.value = "";
  phoneField.value = "";

  nameField.focus();

  renderList();
});

window.onload = function () {
  if (localStorage.getItem("contactsArray")) {
    contactList = JSON.parse(localStorage.getItem("contactsArray"));
  }
  renderList();
};
