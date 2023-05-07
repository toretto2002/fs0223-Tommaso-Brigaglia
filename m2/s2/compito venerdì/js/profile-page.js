console.log('ciao');

let checks = document.querySelectorAll('.check');

console.log(checks);



const clicked = function(){
    this.classList.toggle('checked')
}

for(item of checks){
    item.addEventListener('click', clicked)
}

let form = document.getElementById('profile-form');

form.addEventListener('submit', (e) => e.preventDefault());