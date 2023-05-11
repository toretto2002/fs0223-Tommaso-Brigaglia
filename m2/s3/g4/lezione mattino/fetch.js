fetch("https://jsonplaceholder.typicode.com/photos")
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("error");
    }
  })
  .then((photos) => {})
  .catch((err) => {
    console.log(err);
  });
