let userTipizzato:{nome:string, cognome:string, anni:number} = {
    nome: 'mario',
    cognome: 'rossi',
    anni: 30
}

class User{
    nome: string;
    cognome: string;
    anni?: number;

    constructor(_nome:string, _cognome:string, _anni?:number){
        this.nome = _nome;
        this.cognome = _cognome;
        this.anni = _anni;
    }
}

let userTipizzato2: User = new User('Maria', 'Bianchi');