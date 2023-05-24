class User {
  name: string;
  lastName: string;

  constructor(name: string, lastName: string) {
    this.name = name;
    this.lastName = lastName;
  }

  get getName(): string {
    return this.name;
  }
}

class Invoice {
  importo: number;
  numeroFattura: string;
  intestatario: User;

  constructor(importo: number, numeroFattura: string, intestatario: User) {
    this.importo = importo;
    this.numeroFattura = numeroFattura;
    this.intestatario = intestatario;
  }
}

let utente = new User("Mario", "Rossi");
let fattura = new Invoice(1000, "1/2023", utente);

console.log(fattura);
console.log(fattura.intestatario.getName);

//fattura.intestatario.getName = "mirko"; get è readonly non posso usarlo per sovrascrivere il dato
