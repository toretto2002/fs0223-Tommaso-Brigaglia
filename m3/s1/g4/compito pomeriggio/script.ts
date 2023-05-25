class Capo {
  id: number;
  codprod: number;
  collezione: string;
  capo: string;
  modello: number;
  quantita: number;
  colore: string;
  prezzoivaesclusa: number;
  prezzoivainclusa: number;
  disponibile: string;
  saldo: number;

  constructor(
    id: number,
    codprod: number,
    collezione: string,
    capo: string,
    modello: number,
    quantita: number,
    colore: string,
    prezzoivaesclusa: number,
    prezzoivainclusa: number,
    disponibile: string,
    saldo: number
  ) {
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

  saldoCapo(): string {
    let prezzoScontato: number = 0;

    prezzoScontato = this.prezzoivainclusa * (1 - this.saldo / 100);

    return `il prezzo di questo articolo sarebbe: ${this.prezzoivainclusa}€ ma dato che è applicato uno sconto del ${this.saldo}% lo pagherai ${prezzoScontato}`;
  }
}

class CatalogoCapi {
  catalogo!: Capo[];

  constructor() {
    this.riempiCatalogo();
  }

  riempiCatalogo() {
    fetch("Abbigliamento.json")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("non sono riuscito a caricare i capi");
        }
      })
      .then((catalogoDaServer) => {
        // console.log(catalogoDaServer);
        this.catalogo = [];
        catalogoDaServer.forEach((capo: Capo) => {
          let capoToPush = new Capo(
            capo.id,
            capo.codprod,
            capo.collezione,
            capo.capo,
            capo.modello,
            capo.quantita,
            capo.colore,
            capo.prezzoivaesclusa,
            capo.prezzoivainclusa,
            capo.disponibile,
            capo.saldo
          );

          this.catalogo.push(capoToPush);
        });
      })
      .then(() => {
        console.log(this.catalogo);
        console.log(this.catalogo[3].saldoCapo());
      })
      .catch((err) => console.log(err));
  }
}

let catalogoCapi = new CatalogoCapi();
