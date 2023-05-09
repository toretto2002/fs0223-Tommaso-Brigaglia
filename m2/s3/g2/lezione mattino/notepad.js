let buttonSave = document.getElementById("save-button");

let textArea = document.querySelector("textarea");

buttonSave.addEventListener("click", function () {
  let textToSave = textArea.value;
  console.log(textToSave);
  localStorage.setItem("savedText", textToSave);
});

const loadContent = function () {
  let innerText = localStorage.getItem("savedText");

  if (innerText) {
    textArea.value = innerText;
  }
};

let buttonDelete = document.getElementById("delete");

buttonDelete.addEventListener("click", function () {
  localStorage.clear();
  textArea.value = "";
});

window.onload = loadContent;
