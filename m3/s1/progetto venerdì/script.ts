class datiChiamata {
  id: number;
  durata: number;
  time: Date;

  constructor(id: number, durata: number, time: Date) {
    this.id = id;
    this.durata = durata;
    this.time = time;
  }
}

//------------------------------------------------------------TYPE---------------------------------------------------------------------

type registro = datiChiamata[];

//---------------------------------------------------------INTERFACCIA-----------------------------------------------------------------

interface ISmartphone {
  carica: number;
  numeroChiamate: number;
  costoMinuto: number;
  registroChiamate: registro;

  ricarica(euro: number): void;
  numero404(): string;
  getNumeroChiamate(): number;
  chiamata(min: number): void;
  azzeraChiamate(): void;
  mostraRegistroChiamate(): void;
  filtraChiamatePerDataOra(mese: number, giorno?: number): datiChiamata[];
}

//------------------------------------------------------CLASSE SMARTPHONE--------------------------------------------------------------

class Smartphone implements ISmartphone {
  registroChiamate: registro = [];
  carica: number = 0;
  numeroChiamate: number = 0;
  costoMinuto: number = 0.2;

  filtraChiamatePerDataOra(mese: number, giorno?: number): datiChiamata[] {
    let filtered: datiChiamata[] = [];

    if (giorno) {
      filtered = this.registroChiamate.filter((i) => {
        return i.time.getDate() == giorno && i.time.getMonth() + 1 == mese;
      });
    } else {
      filtered = this.registroChiamate.filter((i) => {
        return i.time.getMonth() + 1 == mese;
      });
    }

    return filtered;
  }

  mostraRegistroChiamate(): registro {
    return this.registroChiamate;
  }

  ricarica(euro: number): void {
    this.carica += euro;
  }

  numero404(): string {
    return `Ciao! il tuo credito residuo ammonta a ${this.carica}€`;
  }
  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }
  chiamata(min: number): void {
    this.carica -= min * this.costoMinuto;
    this.numeroChiamate++;
    let toRegister = new datiChiamata(this.numeroChiamate, min, new Date());
    this.registroChiamate.push(toRegister);
  }
  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }

  riempiRubriche(): void {
    //non tipizzata per mancanza di tempo
    let toFill: any = document.getElementById("rubriche");

    let ul = document.createElement("ul");
    toFill.appendChild(ul);

    this.registroChiamate.forEach(function (chiamata) {
      let li = document.createElement("li");
      li.innerText = `hai effettuato la chiamata #${chiamata.id}, durata ${chiamata.durata}min, in data ${chiamata.time}`;
      ul.appendChild(li);
    });
  }
}

//---------------------------------------------------PROVE-------------------------------------------------------------------

let primoUser = new Smartphone();

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
let chiamate = primoUser.mostraRegistroChiamate();
console.log(chiamate);
console.log(primoUser.filtraChiamatePerDataOra(5));
console.log(primoUser.filtraChiamatePerDataOra(5, 27));
primoUser.riempiRubriche();

let secondUser = new Smartphone();

secondUser.ricarica(35);
console.log(secondUser.numero404());
secondUser.chiamata(26);
console.log(secondUser.numero404());
console.log(secondUser.getNumeroChiamate());

let thirdUser = new Smartphone();

thirdUser.ricarica(0);
console.log(thirdUser.numero404());
thirdUser.chiamata(26);
thirdUser.chiamata(2);
thirdUser.chiamata(6);
thirdUser.chiamata(36);
thirdUser.chiamata(16);
console.log(thirdUser.numero404());
console.log(thirdUser.getNumeroChiamate());
