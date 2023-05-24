var User = /** @class */ (function () {
    function User(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    Object.defineProperty(User.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var Invoice = /** @class */ (function () {
    function Invoice(importo, numeroFattura, intestatario) {
        this.importo = importo;
        this.numeroFattura = numeroFattura;
        this.intestatario = intestatario;
    }
    return Invoice;
}());
var utente = new User("Mario", "Rossi");
var fattura = new Invoice(1000, "1/2023", utente);
console.log(fattura);
console.log(fattura.intestatario.getName);
//fattura.intestatario.getName = "mirko"; get è readonly non posso usarlo per sovrascrivere il dato
