let countUntilThree = function () {
  setTimeout(() => {
    console.log("conto fino a 3...");
  }, 3000);
};

let start = function () {
  console.log("FATTO");
};

start();

let countUntilThreeWithPromise = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("conto fino a 3...");
      resolve();
    }, 3000);
  });
};

let startWithPromise = function () {
  countUntilThreeWithPromise()
    .then(() => {
      console.log("fatto");
    })
    .catch(() => {
      console.log("qualcosa è andato storto");
    });
};

startWithPromise();
