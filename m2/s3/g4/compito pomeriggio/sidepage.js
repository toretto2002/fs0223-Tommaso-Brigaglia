const URL_IMG = "https://www.pexels.com/v1/photos/";
const APIKEY = "bWR8cNciAR8VqVCfjGDBVpWA1pxj7B4rXvp0cpr5bIDX6m7P1JhIgZJQ";

const getSingleImage = function () {
  let idFromSearch = new URLSearchParams(window.location.search).get("imageId");
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
    .then((photo) => {});
};
