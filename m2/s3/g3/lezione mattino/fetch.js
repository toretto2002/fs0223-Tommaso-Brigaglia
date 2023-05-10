fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log(res);
    if (res.ok) {
      return res.json();
    } else {
      console.log(res.status);
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
