class SonAccount {
  balanceInit: number;

  constructor(_balanceInit: number = 0) {
    this.balanceInit = _balanceInit;
  }

  deposit(sumDeposit: number): number {
    this.balanceInit += sumDeposit;

    return this.balanceInit;
  }

  draw(sumDraw: number): number {
    this.balanceInit -= sumDraw;

    return this.balanceInit;
  }
}

let firstSonAccount = new SonAccount(200);

console.log(firstSonAccount.balanceInit);

firstSonAccount.deposit(450);

console.log(firstSonAccount.balanceInit);

firstSonAccount.draw(166);

console.log(firstSonAccount.balanceInit);

class motherAccount extends SonAccount {
  addInterest() {
    this.balanceInit += this.balanceInit * 0.1;

    return this.balanceInit;
  }
}

let motherAccount1 = new motherAccount(500);

console.log(motherAccount1.balanceInit);

motherAccount1.deposit(100000);

console.log(motherAccount1.balanceInit);

motherAccount1.draw(450);

console.log(motherAccount1.balanceInit);

console.log(motherAccount1.addInterest());

console.log(motherAccount1.balanceInit);
