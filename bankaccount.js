class BankAccount {
  #accountNo;
  #balance;

  constructor(accountNo, balance) {
    this.#accountNo = accountNo;
    this.#balance = balance;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  checkBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1, 500);
account.withdraw(100);
account.deposit(50);
console.log(account.checkBalance());  // Prints: 450
