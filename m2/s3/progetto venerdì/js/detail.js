const URL_API = "https://striveschool-api.herokuapp.com/api/product/";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjc4ODg4Zjc0MDAwMTQyODc0M2UiLCJpYXQiOjE2ODM4Nzk4MTcsImV4cCI6MTY4NTA4OTQxN30.XLlSNTdrmf8kaQUrsoUEoSk0TBXl7_n7vuf-os3iEgE";

const loadPage = function () {
  let addressBarContent = new URLSearchParams(window.location.search);
  let itemId = addressBarContent.get("itemId");
  console.log(itemId);

  let cardContainer = document.getElementById("card-container");

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

      cardContainer.innerHTML = `
      <div class="col-12">
        <div class="card">
            <img
                src="${item.imageUrl}"
                class="card-img-top"
                alt="..."
            />
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p>${item.brand}</p>
                <p class="card-text">
                    ${item.description}
                </p>
                <p>Price: ${item.price}€</p>
            </div>
        </div>
      </div>`;
    })
    .catch((err) => console.log(err));
};

window.onload = () => {
  loadPage();
};
