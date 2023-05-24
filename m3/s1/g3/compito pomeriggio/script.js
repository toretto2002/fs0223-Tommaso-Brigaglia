var Lavoratore = /** @class */ (function () {
    function Lavoratore(_codredd, _redditoAnnuoLordo) {
        this.tasseINPS = 0.2623;
        this.codredd = _codredd;
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
    }
    Lavoratore.prototype.calcolaCoeff = function () {
        if (this.codredd == 47.82 || this.codredd == 47.89) {
            return 0.54;
        }
        else if (this.codredd == 41 ||
            this.codredd == 42 ||
            this.codredd == 43 ||
            this.codredd == 68) {
            return 0.86;
        }
        else if (this.codredd == 46.1) {
            return 0.62;
        }
        else if ((this.codredd >= 64 && this.codredd <= 66) ||
            (this.codredd >= 69 && this.codredd <= 75) ||
            (this.codredd >= 85 && this.codredd <= 88)) {
            return 0.78;
        }
        else if ((this.codredd >= 1 && this.codredd <= 9) ||
            (this.codredd >= 12 && this.codredd <= 39) ||
            (this.codredd >= 50 && this.codredd <= 99)) {
            return 0.67;
        }
        else {
            return 0.4;
        }
    };
    return Lavoratore;
}());
