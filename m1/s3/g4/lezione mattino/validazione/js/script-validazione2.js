

let myForm = document.getElementById('myForm');
let myFormButton = document.querySelector('.invia');

//modalità gestendo il submit sul form
myForm.addEventListener('submit', function(e){
    e.preventDefault();//blocca funzionamenti predefiniti qualora ce ne fossero, per l'elemento selezionato e questo evento
    console.log('inviato');   
});


//modalità gestendo il click sul bottone 
myFormButton.addEventListener('click', function(e){
    e.preventDefault();

    let nome = document.querySelector('#myForm input[name="nome"]');
    let cognome = document.querySelector('#myForm input[name="cognome"]');
    let email = document.querySelector('#myForm input[name="e-mail"]');
    let password = document.querySelector('#myForm input[name="psw"]');

    

    let valid = true;

    console.log(nome.checkValidity());

    if(!nome.checkValidity()){
        nome.nextElementSibling.textContent = nome.validationMessage;
        console.log(nome.validity);
    }else{
        nome.nextElementSibling.textContent = ''
        console.log(nome.validity);
    }

    if(!email.checkValidity()){
        email.nextElementSibling.textContent = email.validationMessage;
        console.log(email.validity);
    }else{
        email.nextElementSibling.textContent = ''
    }


    if(valid){
        //codice che invia i dati al server
        console.log('inviato');
    }
    console.log('cliccato');
})
