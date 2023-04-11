// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n){
    let arr = [];
    let i = 0;
    while(i < n){
        arr[i] = Math.random()*10
        i++
    }

    return arr
}



function checkArray(arr){

    let somma = 0;

    for(n of arr){
        if(n > 5){
            console.log(`il numero ${n} è maggiore di 5`)
            somma += n
        }else{
            console.log(`il numero ${n} non è maggiore di 5`)
        }
    }

    return somma
}

console.log(checkArray(giveMeRandom(10)))

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let shoppingCart = [
    {
        price: 20,
        name: 'trousers',
        id: 'wardrobe',
        quantity: 2
    },
    {
        price: 400,
        name: 'jacket',
        id: 'wardrobe',
        quantity: 1
    },
    {
        price: 60,
        name: 'ring',
        id: 'jewelry',
        quantity: 2
    },
    {
        price: 5,
        name: 'underwear',
        id: 'wardrobe',
        quantity: 2
    },
]

function shoppingCartTotal(shoppingCart){

    let tot = 0;

    for(item of shoppingCart){
        tot += item.price * item.quantity
    }

    return tot
}

console.log(shoppingCartTotal(shoppingCart))

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function addToShoppingCart(newObj){

    shoppingCart.push(newObj);

    return shoppingCart.length
}

let newItem = {
    price: 15,
    name: 'hat',
    id: 'wardrobe',
    quantity: 3
}

console.log(addToShoppingCart(newItem))
console.log(shoppingCart);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function maxShoppingCart(shoppingCart){

    let maxprice = 0;
    let objName;

    for(item of shoppingCart){
        if(item.price > maxprice){
            maxprice = item.price;
            objName = item.name
        }
    }

    return objName;
}

console.log(maxShoppingCart(shoppingCart))

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function latestShoppingCart(shoppingCart){
    return shoppingCart[shoppingCart.length - 1].name
}

console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function loopUntil(x){

    if(x > 9 || x < 0){
        return 'IL NUMERO DEVE ESSERE COMPRESO TRA 0 E 9!!'
    }

    let count = 0;

    while(count < 3){
        let random = Math.random()*10
        console.log(random);

        if(random > x){
            count++
        }else{
            count = 0;
        }
    }
}

loopUntil(5);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function average(arr){

    let tot = 0, count = 0;

    for(item of arr){
        if(typeof(item) == 'number'){

            tot += item;
            count++;

        }
    }

    return tot/count;
}

let arrayAverage = [6, 'tonno', 19, 8]

console.log(average(arrayAverage));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function longest(arr){
    let maxLength = 0;
    let longest

    for(str of arr){
        if(str.length > maxLength){
            longest = str
        }
    }

    return longest
}

let strArr = ['giacomo', 'giovanni', 'marco', 'mario', 'matteo', 'asdrubale'];

console.log(longest(strArr));

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function antiSpam(emailContent){
    if(emailContent.indexOf('SPAM') == -1 && emailContent.indexOf('SCAM') == -1){
        return true
    }else{
        return false
    }
}

let string = 'ginocchioSCAMcancello'

console.log(antiSpam(string));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function matrixGenerator(x, y){
    for(let i = 0; i)
}
