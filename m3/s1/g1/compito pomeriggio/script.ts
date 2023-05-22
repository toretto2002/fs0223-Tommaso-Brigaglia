console.log('hello world');

let firstNumber: number = 25;

let secondNumber: number = 18; 

const randomNumber: Function = function():String{
    let random : number = Math.floor(Math.random()*100 + 1)
    console.log(random);
    

    let diff1: number = 0;
    let diff2: number = 0;

    if(random < firstNumber){
        diff1 = firstNumber - random
    }else{
        diff1 = random - firstNumber
    }

    if(random < secondNumber){
        diff2 = secondNumber - random
    }else{
        diff2 = random - secondNumber
    }

    if(diff1 < diff2){
        return "ha vinto il giocatore 1"
    }else{
        return "ha vinto il giocatore 2"
    }
    
}

console.log(randomNumber());

