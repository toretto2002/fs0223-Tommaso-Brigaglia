console.log('hello world');
var firstNumber = 25;
var secondNumber = 18;
var randomNumber = function () {
    var random = Math.floor(Math.random() * 100 + 1);
    console.log(random);
    var diff1 = 0;
    var diff2 = 0;
    if (random < firstNumber) {
        diff1 = firstNumber - random;
    }
    else {
        diff1 = random - firstNumber;
    }
    if (random < secondNumber) {
        diff2 = secondNumber - random;
    }
    else {
        diff2 = random - secondNumber;
    }
    if (diff1 < diff2) {
        return "ha vinto il giocatore 1";
    }
    else {
        return "ha vinto il giocatore 2";
    }
};
console.log(randomNumber());
