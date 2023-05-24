var Studente = /** @class */ (function () {
    function Studente(name, lastName, materie) {
        this.name = name;
        this.lastName = lastName;
        this.materie = materie;
    }
    Object.defineProperty(Studente.prototype, "presentazione", {
        get: function () {
            return "sono ".concat(this.name, " ").concat(this.lastName, " e studio le seguenti materie ").concat(this.materie.join(", "));
        },
        enumerable: false,
        configurable: true
    });
    return Studente;
}());
var Classe = /** @class */ (function () {
    function Classe(nome) {
        this.studenti = [];
        this.nome = nome;
    }
    Classe.prototype.aggiungiStudente = function (studente) {
        this.studenti.push(studente);
    };
    Object.defineProperty(Classe.prototype, "getStudenti", {
        get: function () {
            return this.studenti;
        },
        enumerable: false,
        configurable: true
    });
    return Classe;
}());
var materie = ["js", "ts"];
var studente1 = new Studente("mario", "rossi", materie);
var studente2 = new Studente("maria", "rossa", materie);
var studente3 = new Studente("mario", "fossi", materie);
var studente4 = new Studente("mariuccio", "rossi", materie);
var studente5 = new Studente("mariiette", "rossi", materie);
var studente6 = new Studente("mariobrods", "rossi", materie);
var Iscrizione = /** @class */ (function () {
    function Iscrizione(studente, classe) {
        this.studente = studente;
        this.classe = classe;
    }
    Iscrizione.prototype.aggiungiCorso = function () {
        this.classe.aggiungiStudente(this.studente);
    };
    return Iscrizione;
}());
var fs0223 = new Classe("fs0223");
fs0223.aggiungiStudente(studente1);
fs0223.aggiungiStudente(studente2);
fs0223.aggiungiStudente(studente3);
fs0223.aggiungiStudente(studente4);
fs0223.aggiungiStudente(studente5);
fs0223.aggiungiStudente(studente6);
console.log(fs0223.getStudenti);
console.log(fs0223.getStudenti[0].presentazione);
