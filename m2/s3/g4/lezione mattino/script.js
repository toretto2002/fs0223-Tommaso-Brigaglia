const AGENDA_URL = "https://striveschool-api.herokuapp.com/api/agenda/";

const getEvents = function () {
  fetch(AGENDA_URL)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Couldn't get events");
      }
    })
    .then((data) => {})
    .catch((err) => console.log(err));
};
