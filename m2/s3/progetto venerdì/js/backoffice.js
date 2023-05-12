const URL_API = "https://striveschool-api.herokuapp.com/api/product/";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjc4ODg4Zjc0MDAwMTQyODc0M2UiLCJpYXQiOjE2ODM4Nzk4MTcsImV4cCI6MTY4NTA4OTQxN30.XLlSNTdrmf8kaQUrsoUEoSk0TBXl7_n7vuf-os3iEgE";

const mainForm = document.getElementById("main-form");

const conferma = function (string) {
  let flag = window.confirm("sei sicuro di proseguire con " + string);

  return flag;
};

const resetForm = function () {
  let resetButton = document.getElementById("reset-btn");
  let addressBarContent = new URLSearchParams(window.location.search);
  let itemId = addressBarContent.get("itemId");

  resetButton.addEventListener("click", function () {
    if (conferma("il reset?")) {
      if (itemId) {
        fillFields(itemId);
      } else {
        document.getElementById("name-field").value = "";
        document.getElementById("description-field").value = "";
        document.getElementById("brand-field").value = "";
        document.getElementById("image-field").value = "";
        document.getElementById("price-field").value = "";
      }
    } else {
      alert("reset annullato");
    }
  });
};

const uploadData = function (data, itemId) {
  fetch(itemId ? URL_API + itemId : URL_API, {
    method: itemId ? "PUT" : "POST",
    body: JSON.stringify(data),
    headers: {
      Authorization: "Bearer " + API_KEY,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Couldn't upload");
      }
    })
    .then((data) => {
      console.log(data);
      alert(
        itemId
          ? "Modica avvenuta con successo"
          : "Creazione avvenuta con successo"
      );
      location.assign("main-page.html");
    })
    .catch((err) => console.log(err));
};

const deleteItem = function (itemId) {
  let deleteButton = document.getElementById("delete-btn");

  deleteButton.addEventListener("click", () => {
    if (conferma("l'eliminazione?")) {
      fetch(URL_API + itemId, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + API_KEY,
        },
      })
        .then((res) => {
          if (res.ok) {
            alert("eliminazione avvenuta");
          } else {
            throw new Error("errore nell'eliminazione");
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("eliminazione annullata");
    }
  });
};

const fillFields = function (itemId) {
  fetch(URL_API + itemId, {
    headers: {
      Authorization: "Bearer " + API_KEY,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("errore nel caricamento dei campi");
      }
    })
    .then((item) => {
      console.log(item);

      document.getElementById("name-field").value = item.name;
      document.getElementById("description-field").value = item.description;
      document.getElementById("brand-field").value = item.brand;
      document.getElementById("image-field").value = item.imageUrl;
      document.getElementById("price-field").value = item.price;
    })
    .catch((err) => console.log(err));
};

mainForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let addressBarContent = new URLSearchParams(window.location.search);
  let itemId = addressBarContent.get("itemId");

  let name = document.getElementById("name-field").value;
  let description = document.getElementById("description-field").value;
  let brand = document.getElementById("brand-field").value;
  let image = document.getElementById("image-field").value;
  let price = document.getElementById("price-field").value;

  let productObj = {
    name: name,
    description: description,
    brand: brand,
    imageUrl: image,
    price: price,
  };

  uploadData(productObj, itemId);
});

window.onload = () => {
  let addressBarContent = new URLSearchParams(window.location.search);
  let itemId = addressBarContent.get("itemId");

  deleteItem(itemId);
  resetForm();

  console.log(itemId);

  if (itemId) {
    let submitButton = document.getElementById("submit-btn");
    let deleteButton = document.getElementById("delete-btn");
    let mainTitle = document.getElementById("main-title");

    submitButton.innerText = "Modifica";
    deleteButton.classList.remove("d-none");
    mainTitle.innerText = "Modifica Prodotto";

    fillFields(itemId);
  }
};
