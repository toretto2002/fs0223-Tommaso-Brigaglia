console.error("==========================================");
function numero(n) {
    return n;
}
console.log(numero(28));
var obj = {
    prop1: 0,
    prop2: false,
};
var Prova = /** @class */ (function () {
    function Prova() {
    }
    return Prova;
}());
new Prova();
var arr = ["margherita", "ciao", "lontra"];
var numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function filtra(arr, str) {
    return arr.filter(function (el) { return el == str; });
}
console.log(filtra(arr, "ciao"));
console.log(filtra(numeri, 7));
