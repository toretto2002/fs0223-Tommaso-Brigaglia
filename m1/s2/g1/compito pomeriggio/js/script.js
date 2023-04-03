

alert("Hello World");


document.getElementById('dariempire').innerHTML = 'prova';



var primaVar = 10;
var secondaVar = 20;
var dati = 0;
var richieste = 5;


var limite = 100;

for (var i = 0; i < richieste; i++) {
    if(primaVar + secondaVar >= limite){
        alert("hai superato il limite");
    }else if(primaVar + secondaVar < limite && primaVar + secondaVar >= 0){
        dati = prompt('sei dentro i limiti, inserisci i tuoi dati');
    }
}
