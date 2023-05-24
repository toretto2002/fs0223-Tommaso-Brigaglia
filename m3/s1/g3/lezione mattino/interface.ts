interface Ipersona {
  nome: string;
  presentazione(): string;
}

interface IUtente {
  password: string;
  email: string;
}

//uso le interfacce per tipizzare molto più velocemente al posto di tipizzare tutto a mano o dover costruire una classe per farlo
let user: IUtente = {
  password: "password",
  email: "email@emali.it",
};

class Corsista implements Ipersona {
  nome: string;
  materie: string[] = [];

  constructor(nome: string) {
    this.nome = nome;
  }
  presentazione(): string {
    return "prova";
  }
}

class Docente implements Ipersona {
  nome: string;
  skills: string[] = [];

  constructor(nome: string) {
    this.nome = nome;
  }

  presentazione(): string {
    return "prova";
  }
}

class Admin implements Ipersona {
  constructor(nome: string) {
    this.nome = nome;
  }

  nome: string;

  presentazione(): string {
    return "prova";
  }
}
