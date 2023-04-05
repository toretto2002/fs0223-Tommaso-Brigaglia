/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let primoNumero = 5;
let secondoNumero = 2;

if (primoNumero > secondoNumero) {
   console.log(`il primo numero: ${primoNumero} è maggiore del secondo numero: ${secondoNumero}`);
}else if (primoNumero < secondoNumero) {
  console.log(`il secondo numero: ${secondoNumero} è maggiore del primo numero: ${primoNumero}`);
}else{
  console.log(`i numeri sono uguali`);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numeroCinque = 6;

if (numeroCinque != 5) {
   console.log(`not equal`);
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let divisoCinque = -15;

if (divisoCinque % 5 == 0) {
   console.log(`divisibile per 5`);
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let primoOtto = 32;
let secondoOtto = 24;

if(primoOtto == 8 || secondoOtto == 8) {
  console.log(`uno dei due numeri è 8`)
}else if(primoOtto + secondoOtto == 8) {
  console.log(`la somma dei due numeri è 8`)
}else if(primoOtto - secondoOtto == 8 || secondoOtto - primoOtto == 8) {
  console.log(`la differenza dei due numeri è 8`)
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totCarrelo = 51;

function costoSpedizione(amount){
  if(amount > 50) {
    return amount;
  }else{
    return amount + 10;
  }
}

console.log(costoSpedizione(totCarrelo));


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totCarrelo2 = 30;

function costoSpedizione(amount){
  if(amount > 50) {
    return amount;
  }else{
    return amount + 10;
  }
}

console.log(costoSpedizione(totCarrelo2) * 0.8);




/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let var1 = 10;
let var2 = 24;
let var3 = 300;

let arrOrdinato = [0, 0, 0];

if(var1 >= var2 && var1 >= var3) {
  arrOrdinato[2] = var1;

  if( var2 >= var3) {
    arrOrdinato[1] = var2;
    arrOrdinato[0] = var3;
  }else{
    arrOrdinato[1] = var3;
    arrOrdinato[0] = var2;
  }
}else if(var2 >= var1 && var2 >= var3) {
  arrOrdinato[2] = var2;

  if( var1 >= var3) {
    arrOrdinato[1] = var1;
    arrOrdinato[0] = var3;
  }else{
    arrOrdinato[1] = var3;
    arrOrdinato[0] = var1;
  }
  
}else if(var3 >= var1 && var3 >= var2){
  arrOrdinato[2] = var3;

  if( var1 >= var2) {
    arrOrdinato[1] = var1;
    arrOrdinato[0] = var2;
  }else{
    arrOrdinato[1] = var2;
    arrOrdinato[0] = var1;
  }
}

console.log(arrOrdinato);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number = [23]

if (typeof number == 'number') {
  console.log(`la varianile è di tipo number`);
}else{
  console.log(`la varianile non è di tipo number`);
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function isPari(numero) {
  if (numero % 2 == 0) {
    console.log(`numero pari`);
  }else{
    console.log(`numero dispari`);
  }
}

isPari(11);

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  
  
  let val = 33
  if (val < 10 && val > 5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = 'Toronto';

console.log(me.city);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;

console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */


me.skills.pop();

console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let arr = [];

arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;
arr[5] = 6;
arr[6] = 7;
arr[7] = 8;
arr[8] = 9;
arr[9] = 10;

console.log(arr);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

arr[9] = 100;

console.log(arr);
