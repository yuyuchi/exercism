//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this._amount = 0;
    this._isAccountClosed = true;
  }

  open() {
    if (!this._isAccountClosed) throw new ValueError();
    this._amount = 0;
    this._isAccountClosed = false;
  }

  close() {
    if (this._isAccountClosed) throw new ValueError();
    this._isAccountClosed = true;
  }

  deposit(currency) {
    if (this._isAccountClosed) throw new ValueError();
    if (currency < 0) throw new ValueError();
    this._amount += currency;
  }

  withdraw(currency) {
    if (this._isAccountClosed) throw new ValueError();
    if (currency > this._amount || currency < 0) throw new ValueError();
    this._amount -= currency;
  }

  get balance() {
    if (this._isAccountClosed) throw new ValueError();
    return this._amount;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
