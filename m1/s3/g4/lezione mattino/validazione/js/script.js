
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

    if(nome.value == ''){
        // console.log('campo nome vuoto');
        nome.style.outline = '1px solid red';
        nome.nextElementSibling.textContent = `devi inserire il ${nome.placeholder}`
        valid = false;
    }else{
        nome.style.outline = '';
        nome.nextElementSibling.textContent = '';
    }

    if(cognome.value == ''){
        // console.log('campo cognome vuoto');
        cognome.style.outline = '1px solid red';
        cognome.nextElementSibling.textContent = `devi inserire il ${cognome.placeholder}`
        valid = false;
    }else{
        cognome.style.outline = '';
        cognome.nextElementSibling.textContent = '';
    }

    if(email.value == ''){
        // console.log('campo email vuoto');
        email.style.outline = '1px solid red';
        email.nextElementSibling.textContent = `devi inserire l' ${email.placeholder}`
        valid = false;
    }else{
        email.style.outline = '';
        email.nextElementSibling.textContent = '';
    }

    if(password.value == ''){
        // console.log('campo password vuoto');
        password.style.outline = '1px solid red';
        password.nextElementSibling.textContent = `devi inserire la ${password.placeholder}`
        valid = false;
    }else{
        password.style.outline = '';
        password.nextElementSibling.textContent = '';
    }

    if(valid){
        //codice che invia i dati al server
        console.log('inviato');
    }
    console.log('cliccato');
})


//mostra nascondi password
let onOff = document.querySelector('.onOff');

onOff.addEventListener('click', function(){
    let password = document.querySelector('input.showHide');

    password.type = (password.type == 'password') ? 'text' : 'password';


})