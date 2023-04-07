function addNumber(n){

    let display = document.getElementById("display");

    display.value += n; 

}

function total(){
    let display = document.getElementById("display");
    display.value = eval(display.value.replaceAll('x', '*'));
}