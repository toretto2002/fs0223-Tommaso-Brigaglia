var datiChiamata = /** @class */ (function () {
    function datiChiamata(id, durata, time) {
        this.id = id;
        this.durata = durata;
        this.time = time;
    }
    return datiChiamata;
}());
//------------------------------------------------------CLASSE SMARTPHONE--------------------------------------------------------------
var Smartphone = /** @class */ (function () {
    function Smartphone() {
        this.registroChiamate = [];
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.2;
    }
    Smartphone.prototype.filtraChiamatePerDataOra = function (mese, giorno) {
        var filtered = [];
        if (giorno) {
            filtered = this.registroChiamate.filter(function (i) {
                return i.time.getDate() == giorno && i.time.getMonth() + 1 == mese;
            });
        }
        else {
            filtered = this.registroChiamate.filter(function (i) {
                return i.time.getMonth() + 1 == mese;
            });
        }
        return filtered;
    };
    Smartphone.prototype.mostraRegistroChiamate = function () {
        return this.registroChiamate;
    };
    Smartphone.prototype.ricarica = function (euro) {
        this.carica += euro;
    };
    Smartphone.prototype.numero404 = function () {
        return "Ciao! il tuo credito residuo ammonta a ".concat(this.carica, "\u20AC");
    };
    Smartphone.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Smartphone.prototype.chiamata = function (min) {
        this.carica -= min * this.costoMinuto;
        this.numeroChiamate++;
        var toRegister = new datiChiamata(this.numeroChiamate, min, new Date());
        this.registroChiamate.push(toRegister);
    };
    Smartphone.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    Smartphone.prototype.riempiRubriche = function () {
        //non tipizzata per mancanza di tempo
        var toFill = document.getElementById("rubriche");
        var ul = document.createElement("ul");
        toFill.appendChild(ul);
        this.registroChiamate.forEach(function (chiamata) {
            var li = document.createElement("li");
            li.innerText = "hai effettuato la chiamata #".concat(chiamata.id, ", durata ").concat(chiamata.durata, "min, in data ").concat(chiamata.time);
            ul.appendChild(li);
        });
    };
    return Smartphone;
}());
//---------------------------------------------------PROVE-------------------------------------------------------------------
var primoUser = new Smartphone();
primoUser.ricarica(15);
console.log(primoUser.numero404());
primoUser.chiamata(7);
console.log(primoUser.numero404());
console.log(primoUser.getNumeroChiamate());
primoUser.chiamata(23);
primoUser.chiamata(2);
console.log(primoUser.numero404());
console.log(primoUser.getNumeroChiamate());
primoUser.azzeraChiamate();
console.log(primoUser.getNumeroChiamate());
var chiamate = primoUser.mostraRegistroChiamate();
console.log(chiamate);
console.log(primoUser.filtraChiamatePerDataOra(5));
console.log(primoUser.filtraChiamatePerDataOra(5, 27));
primoUser.riempiRubriche();
var secondUser = new Smartphone();
secondUser.ricarica(35);
console.log(secondUser.numero404());
secondUser.chiamata(26);
console.log(secondUser.numero404());
console.log(secondUser.getNumeroChiamate());
var thirdUser = new Smartphone();
thirdUser.ricarica(0);
console.log(thirdUser.numero404());
thirdUser.chiamata(26);
thirdUser.chiamata(2);
thirdUser.chiamata(6);
thirdUser.chiamata(36);
thirdUser.chiamata(16);
console.log(thirdUser.numero404());
console.log(thirdUser.getNumeroChiamate());
