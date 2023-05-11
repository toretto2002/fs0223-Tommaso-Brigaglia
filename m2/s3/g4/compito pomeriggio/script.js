const APIKEY = "bWR8cNciAR8VqVCfjGDBVpWA1pxj7B4rXvp0cpr5bIDX6m7P1JhIgZJQ";
const IMG_CONTAINER = document.getElementById("images-container");
const LOAD_IMG_BTN = document.getElementById("load-images-btn");
const LOAD_SECONDARY_BTN = document.getElementById("load-secondary-btn");
const NAV_FORM = document.getElementById("nav-form");

const hide = function (index) {
  console.log(index);
  let toHide = document.getElementById("card" + index);
  toHide.parentElement.classList.add("d-none");
};

const fillImageInModal = function (context) {
  let imgIntoModal = document.querySelector("#img-modal img");
  imgIntoModal.src =
    context.parentElement.parentElement.parentElement.parentElement.querySelector(
      "img"
    ).src;
};
const loadImages = function (query) {
  fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    headers: {
      Authorization: APIKEY,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel caricamento");
      }
    })
    .then((images) => {
      console.log(images);
      let count = 0;
      images.photos.forEach((image) => {
        let newCol = document.createElement("div");
        newCol.classList.add("col-12", "col-lg-4", "mb-3");

        newCol.innerHTML = `
            <div id="card${count}" class="card" style="width: 18rem">
                <a href="sidepage.html?imageId=${image.id}">
                    <img src="${image.src.medium}" class="card-img-top" alt="..." />
                </a>
                <div class="card-body d-flex flex-column justify-content-center">
                    <button id="hide-btn${count}" class="btn btn-success" onclick="hide(${count})">Hide</button>
                    <button id="modal-btn${count}" class="btn btn-secondary mt-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop onclick="fillImageInModal(this)">View</button>
                    <p class="card-text mt-2">Image id: ${image.id}</p>
                </div>
            </div>`;

        IMG_CONTAINER.appendChild(newCol);
        count++;
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

LOAD_IMG_BTN.addEventListener("click", () => {
  IMG_CONTAINER.innerHTML = "";
  loadImages("mountains");
});

LOAD_SECONDARY_BTN.addEventListener("click", () => {
  console.log("clicac");
  IMG_CONTAINER.innerHTML = "";
  loadImages("cities");
});

NAV_FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("clicac");
  IMG_CONTAINER.innerHTML = "";
  let toSearch = document.querySelector("#nav-form input").value;
  loadImages(toSearch);
});
