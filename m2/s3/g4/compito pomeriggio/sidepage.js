const URL_IMG = "https://api.pexels.com/v1/photos/";
const APIKEY = "bWR8cNciAR8VqVCfjGDBVpWA1pxj7B4rXvp0cpr5bIDX6m7P1JhIgZJQ";

const getSingleImage = function () {
  let idFromSearch = new URLSearchParams(window.location.search).get("imageId");
  console.log(idFromSearch);
  fetch(URL_IMG + idFromSearch, {
    headers: {
      Authorization: APIKEY,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Couldn't find");
      }
    })
    .then((photo) => {
      console.log(photo);
      let imageContainer = document.getElementById("image-container");
      let newCol = document.createElement("div");
      newCol.classList.add("w-auto");

      newCol.innerHTML = `
        <div class="card mt-5">
            <img src="${photo.src.original}" class="card-img-top" alt="..." />
            <div class="card-body d-flex flex-column align-item-center">
                <a class="w-auto text-align-center" href="${photo.photographer_url}">${photo.photographer}</a>
                <a class="w-auto text-align-center" href="index.html">Torna Indietro</a>
            </div>
        </div>`;

      imageContainer.appendChild(newCol);
      return photo;
    })
    .then((photo) => changeBackground(photo.avg_color))
    .catch((err) => console.log(err));
};

const changeBackground = function (color) {
  let body = document.getElementsByTagName("body")[0];
  body.style.backgroundColor = color;
};

window.onload = () => {
  getSingleImage();
};
