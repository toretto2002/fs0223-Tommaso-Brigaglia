//modalità gestendo il click sul bottone 
let myFormButton = document.querySelector('.invia');

myFormButton.addEventListener('click', function(e){
    e.preventDefault();

    
    let campi = document.querySelectorAll('#myForm input');

    let valid = true;



    for (let campo of campi) {

        console.log(campo.checkValidity());
        
        if(campo.value == ''){
            // console.log('campo nome vuoto');
            campo.style.outline = '1px solid red';
            campo.nextElementSibling.textContent = `devi inserire il ${campo.placeholder}`
            valid = false;
        }else{
            campo.style.outline = '';
            campo.nextElementSibling.textContent = '';
        }
    }

    if(valid){
        //codice che invia i dati al server
        console.log('inviato');
    }
    console.log('cliccato');
})