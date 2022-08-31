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
    if (!this._isAccountClosed) throw new ValueError("Account is already open");
    this._amount = 0;
    this._isAccountClosed = false;
  }

  close() {
    if (this._isAccountClosed) throw new ValueError("Account is not open");
    this._isAccountClosed = true;
  }

  deposit(currency) {
    if (this._isAccountClosed) throw new ValueError("Account is not open");
    if (currency < 0) throw new ValueError("Amount cannot be negative");
    this._amount += currency;
  }

  withdraw(currency) {
    if (this._isAccountClosed) throw new ValueError("Account is not open");
    if (currency > this._amount) throw new ValueError("Balance is too low");
    if (currency < 0) throw new ValueError("Amount cannot be negative");
    this._amount -= currency;
  }

  get balance() {
    if (this._isAccountClosed) throw new ValueError("Account is not open");
    return this._amount;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
