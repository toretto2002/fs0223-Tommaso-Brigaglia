console.error("==========================================");

function numero(n: number): number {
  return n;
}

console.log(numero(28));

// function sommaConcatena<T>(a: T, b: T):T{
//   return a + b;
// }

// console.log(sommaConcatena<number>(2, 7));
// console.log(sommaConcatena<string>("ciao", "come stai?"));

interface chiaveValore<T, U> {
  prop1: T;
  prop2: U;
}

let obj: chiaveValore<number, boolean> = {
  prop1: 0,
  prop2: false,
};

class Prova<T> {
  prop!: T;
}

new Prova<string[]>();

let arr = ["margherita", "ciao", "lontra"];
let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filtra<T>(arr: T[], str: T): T[] {
  return arr.filter((el) => el == str);
}

console.log(filtra<string>(arr, "ciao"));
console.log(filtra<number>(numeri, 7));

interface IPersona {
  nome: string;
  cognome: string;
}
