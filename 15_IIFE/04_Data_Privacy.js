// Write an IIFE that simulates a bank account. It should have methods to deposit, withdraw, and 
// checkBalance. Ensure that the balance is not accessible directly from outside the IIFE.

var BankAccount = (function() {
    var balance = 0;
    return {
        deposit: function(amount) {
            if(amount > 0) {
                balance += amount;
                console.log(`Deposited amount: ${amount}`);
            } else {
                console.log(`Invalid deposited amount`);
            }
        },
        withdraw: function(amount) {
            if(amount>0 && amount <= balance) {
                balance -= amount;
                console.log(`Withdrawn amount: ${amount}`);
            }
        },
        checkbalance: function() {
            console.log(`Current balance: ${balance}`);
        }
    }
}) ();

console.log(BankAccount.deposit(10000));
console.log(BankAccount.withdraw(3000));
console.log(BankAccount.checkbalance());