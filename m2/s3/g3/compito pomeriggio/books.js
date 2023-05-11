let shoppingList = [];
let cartButton = document.getElementById("load-cart-button");
let count = 0;
let oldShoppingList = JSON.parse(localStorage.getItem("shoppingList"));
console.log(oldShoppingList);
console.log(shoppingList);

const saveInStorage = function (index) {
  shoppingList.push(index);
  localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
};

const scarta = function (index) {
  console.log("scartato");
  console.log(index);
  let toRemove = document.getElementById(`card${index}`);
  toRemove.remove();
};

const fillShoppingList = function (shoppingList, books) {
  let cartList = document.getElementById("shopping-cart");
  cartList.innerText = "";
  for (item of shoppingList) {
    let newCartItem = document.createElement("li");
    newCartItem.innerText =
      books[item].title + " | prezzo: " + books[item].price;
    cartList.appendChild(newCartItem);
  }
};

fetch("https://striveschool-api.herokuapp.com/books")
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Errore nel caricare il server");
    }
  })
  .then((books) => {
    console.log(books);

    cartButton.onclick = () => {
      oldShoppingList = JSON.parse(localStorage.getItem("shoppingList"));
      fillShoppingList(oldShoppingList, books);
    };

    addToCart = function (index) {
      console.log(index);
      saveInStorage(index);
      fillShoppingList(shoppingList, books);
    };

    books.forEach((book) => {
      let card = document.createElement("div");
      let mainRow = document.getElementById("main-row");

      card.classList.add("col-12", "col-md-6", "col-lg-3");
      card.id = `card${count}`;

      card.innerHTML = `
      <div class="card">
        <img src="${book.img}" class="card-img-top" alt="copertine libri">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">Price: ${book.price}€</p>
                <button class="btn btn-primary mb-1" onclick="scarta(${count})">Scarta</button>
                <button class="btn btn-warning" onclick="addToCart(${count})">Aggiungi al carrello</button>
            </div>
      </div>`;

      mainRow.appendChild(card);
      count++;
    });
  })
  .catch((err) => console.log(err));
