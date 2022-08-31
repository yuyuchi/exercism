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

  deposit(amount) {
    if (this._isAccountClosed) throw new ValueError("Account is not open");
    if (amount < 0) throw new ValueError("Amount cannot be negative");
    this._amount += amount;
  }

  withdraw(amount) {
    if (this._isAccountClosed) throw new ValueError("Account is not open");
    if (amount > this._amount) throw new ValueError("Balance is too low");
    if (amount < 0) throw new ValueError("Amount cannot be negative");
    this._amount -= amount;
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
