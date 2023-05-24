abstract class Veicolo {
  nRuote: number = 2;
  vel: number = 0;
  velMax: number;

  constructor(nRuote: number, velMax: number) {
    this.nRuote = nRuote;
    this.velMax = velMax;
  }

  fermaVeicolo() {
    this.vel = 0;
  }

  abstract accelera(vel: number): void;
  abstract frena(vel: number): void;
}

class Bicicletta extends Veicolo {
  constructor() {
    super(2, 50);
  }

  accelera(vel?: number): void {
    this.vel++;
  }

  frena(vel?: number): void {
    this.vel--;
  }
}

class Automobile extends Veicolo {
  constructor(velMax: number) {
    super(4, velMax);
  }

  accelera(vel: number): void {
    this.vel += vel;
  }

  frena(vel: number): void {
    this.vel -= vel;
  }
}

let bici = new Bicicletta();

console.log(bici.vel);
bici.accelera();
bici.accelera();
bici.accelera();
bici.accelera();
console.log(bici.vel);

let auto = new Automobile(250);

console.log(auto.vel);
auto.accelera(40);
auto.accelera(40);
auto.accelera(40);
console.log(auto.vel);

console.log(bici);
console.log(auto);
