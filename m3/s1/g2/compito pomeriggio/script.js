var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(_balanceInit) {
        if (_balanceInit === void 0) { _balanceInit = 0; }
        this.balanceInit = _balanceInit;
    }
    SonAccount.prototype.deposit = function (sumDeposit) {
        this.balanceInit += sumDeposit;
        return this.balanceInit;
    };
    SonAccount.prototype.draw = function (sumDraw) {
        this.balanceInit -= sumDraw;
        return this.balanceInit;
    };
    return SonAccount;
}());
var firstSonAccount = new SonAccount(200);
console.log(firstSonAccount.balanceInit);
firstSonAccount.deposit(450);
console.log(firstSonAccount.balanceInit);
firstSonAccount.draw(166);
console.log(firstSonAccount.balanceInit);
var motherAccount = /** @class */ (function (_super) {
    __extends(motherAccount, _super);
    function motherAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    motherAccount.prototype.addInterest = function () {
        this.balanceInit += this.balanceInit * 0.1;
        return this.balanceInit;
    };
    return motherAccount;
}(SonAccount));
var motherAccount1 = new motherAccount(500);
console.log(motherAccount1.balanceInit);
motherAccount1.deposit(100000);
console.log(motherAccount1.balanceInit);
motherAccount1.draw(450);
console.log(motherAccount1.balanceInit);
console.log(motherAccount1.addInterest());
console.log(motherAccount1.balanceInit);
