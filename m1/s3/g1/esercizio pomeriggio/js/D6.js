/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/


function area(l1,l2){
    return l1*l2
}

console.log(area(2,4))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(p1,p2){
    if(p1===p2){
        return (p1+p2)*3
    }else{
        return p1+p2
    }
}

console.log(crazySum(2,2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(p1){
    if(p1 > 19){
        return (p1-19)*3
    }else{
        return Math.abs(p1-19)
    }
}

console.log(crazyDiff(17))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n){
    if(n >= 20 && n <= 100){
        return true
    }else if(n == 400){
        return true
    }else{
        return false
    }
}

console.log(boundary(28));


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(str){
    if(str.indexOf('EPICODE') == -1){
        return 'EPICODE'+ str
    }else{
        return str
    }
}

console.log(epify('R BENVENUTO'));



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(p){
    if(p % 3 == 0){
        return 'il numero è divisibile per 3'
    }else if(p % 7 == 0){
        return 'il numero è divisibile per 7'
    }else{
        return 'il numero non è divisibile ne per tre ne per sette'
    }
}

console.log(check3and7(56));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str){
  
    let j = 0;
    let reversed = '';

    for(let i = str.length - 1; i >= 0; i--){
         
        reversed += str[i];
        
    }

    return reversed;
}

console.log(reverseString('EPICoDe'))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(str){

    let wordsArray = str.split(" ");
    let capitalizedWords = [];
    for (word of wordsArray){

        let firstLetter = word[0].toUpperCase()
        // console.log(firstLetter);
        word = firstLetter + word.slice(1)
        capitalizedWords.push(word)
    }
    return capitalizedWords.join(' ')
}

let risultato = upperFirst('La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.')

console.log(risultato);


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str){

    let newstr = '';
    for(let i = 1; i < str.length - 1; i++){
        newstr += str[i]
    }

    return newstr
}

console.log(cutString('roccioso'));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
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

console.log(giveMeRandom(7))