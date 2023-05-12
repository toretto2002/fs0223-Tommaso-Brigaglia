const URL_API = "https://striveschool-api.herokuapp.com/api/product/";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjc4ODg4Zjc0MDAwMTQyODc0M2UiLCJpYXQiOjE2ODM4Nzk4MTcsImV4cCI6MTY4NTA4OTQxN30.XLlSNTdrmf8kaQUrsoUEoSk0TBXl7_n7vuf-os3iEgE";

const fillSHop = function () {
  fetch(URL_API, {
    headers: {
      Authorization: "Bearer " + API_KEY,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Impossible to load the shop");
      }
    })
    .then((items) => {
      console.log(items);
      let colsContainer = document.getElementById("cols-container");
      items.forEach((item) => {
        let newCol = document.createElement("div");
        newCol.classList.add("col-12", "col-md-6", "col-lg-4", "mb-2");

        newCol.innerHTML = `
            <div class="card h-100" style="width: 18rem">
                <img
                    src="${item.imageUrl}"
                    class="card-img-top"
                    alt="..."
                />
                <div class="card-body d-flex flex-column justify-content-around">
                    <h5 class="card-title">${item.name}</h5>
                    <p>${item.brand}</p>
                    <p class="card-text">
                        ${item.description}
                    </p>
                    <p>Price: ${item.price}€</p>
                    <div class="d-flex flex-column">
                        <a href="backoffice.html?itemId=${item._id}" class="btn btn-warning w-100 mb-1">Modifica</a>
                        <a href="detail.html?itemId=${item._id}" class="btn btn-secondary w-100">Scopri di più</a>
                    </div>
                </div>
            </div>`;

        colsContainer.appendChild(newCol);
      });
    })
    .catch((err) => console.log(err));
};

window.onload = function () {
  fillSHop();
};
