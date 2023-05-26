var Capo = /** @class */ (function () {
    function Capo(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Capo.prototype.saldoCapo = function () {
        var prezzoScontato = 0;
        prezzoScontato = this.prezzoivainclusa * (1 - this.saldo / 100);
        return "il prezzo di questo articolo sarebbe: ".concat(this.prezzoivainclusa, "\u20AC ma dato che \u00E8 applicato uno sconto del ").concat(this.saldo, "% lo pagherai ").concat(prezzoScontato, "\u20AC");
    };
    return Capo;
}());
var CatalogoCapi = /** @class */ (function () {
    function CatalogoCapi() {
        this.riempiCatalogo();
    }
    CatalogoCapi.prototype.riempiCatalogo = function () {
        var _this = this;
        fetch("Abbigliamento.json")
            .then(function (res) {
            if (res.ok) {
                return res.json();
            }
            else {
                throw new Error("non sono riuscito a caricare i capi");
            }
        })
            .then(function (catalogoDaServer) {
            // console.log(catalogoDaServer);
            _this.catalogo = [];
            catalogoDaServer.forEach(function (capo) {
                var capoToPush = new Capo(capo.id, capo.codprod, capo.collezione, capo.capo, capo.modello, capo.quantita, capo.colore, capo.prezzoivaesclusa, capo.prezzoivainclusa, capo.disponibile, capo.saldo);
                _this.catalogo.push(capoToPush);
            });
        })
            .then(function () {
            console.log(_this.catalogo);
            console.log(_this.catalogo[3].saldoCapo());
            console.log(_this.catalogo[1].saldoCapo());
            console.log(_this.catalogo[4].saldoCapo());
        })
            .catch(function (err) { return console.log(err); });
    };
    return CatalogoCapi;
}());
var catalogoCapi = new CatalogoCapi();
