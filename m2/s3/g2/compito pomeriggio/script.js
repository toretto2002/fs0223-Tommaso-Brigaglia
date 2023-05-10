let nameField = document.getElementById("name-field");

let saveButton = document.getElementById("save-button");
let deleteButton = document.getElementById("delete-button");

let toFillField = document.getElementsByTagName("p")[0];

const fillField = function () {
  if (localStorage.getItem("name")) {
    toFillField.innerText = localStorage.getItem("name");
  }
  nameField.focus();
};

saveButton.addEventListener("click", function (e) {
  e.preventDefault();

  localStorage.setItem("name", nameField.value);

  fillField();
});

deleteButton.addEventListener("click", function (e) {
  e.preventDefault();

  nameField.value = "";
  nameField.focus();
});

let timerField = document.getElementById("timer");

let count = 0;

setInterval(function () {
  timerField.innerText = count + "s";
  count += 1;
}, 1000);

window.onload = function () {
  fillField();
};
