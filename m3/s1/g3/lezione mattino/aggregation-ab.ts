class Studente {
  name: string;
  lastName: string;
  protected materie: string[];

  constructor(name: string, lastName: string, materie: string[]) {
    this.name = name;
    this.lastName = lastName;
    this.materie = materie;
  }

  get presentazione(): string {
    return `sono ${this.name} ${
      this.lastName
    } e studio le seguenti materie ${this.materie.join(", ")}`;
  }
}

class Classe {
  protected nome: string;
  protected studenti: Studente[] = [];

  constructor(nome: string) {
    this.nome = nome;
  }

  aggiungiStudente(studente: Studente) {
    this.studenti.push(studente);
  }

  get getStudenti(): Studente[] {
    return this.studenti;
  }
}

let materie: string[] = ["js", "ts"];
let studente1 = new Studente("mario", "rossi", materie);
let studente2 = new Studente("maria", "rossa", materie);
let studente3 = new Studente("mario", "fossi", materie);
let studente4 = new Studente("mariuccio", "rossi", materie);
let studente5 = new Studente("mariiette", "rossi", materie);
let studente6 = new Studente("mariobrods", "rossi", materie);

class Iscrizione {
  protected studente: Studente;
  protected classe: Classe;

  constructor(studente: Studente, classe: Classe) {
    this.studente = studente;
    this.classe = classe;
  }

  aggiungiCorso() {
    this.classe.aggiungiStudente(this.studente);
  }
}

let fs0223 = new Classe("fs0223");

fs0223.aggiungiStudente(studente1);
fs0223.aggiungiStudente(studente2);
fs0223.aggiungiStudente(studente3);
fs0223.aggiungiStudente(studente4);
fs0223.aggiungiStudente(studente5);
fs0223.aggiungiStudente(studente6);

console.log(fs0223.getStudenti);
console.log(fs0223.getStudenti[0].presentazione);
