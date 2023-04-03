function accendi(){
    var lampadina = document.getElementById('bulb');

    lampadina.style.backgroundColor = 'yellow';
}

function spegni(){
    var lampadina = document.getElementById('bulb');
    lampadina.style.backgroundColor ='grey';
}

function onOff(){
    var lampadina = document.getElementById('bulb');
    var colore = lampadina.style.backgroundColor;
    if(colore == ' '){
        lampadina.style.backgroundColor = 'yellow';
    }else{ }
}



