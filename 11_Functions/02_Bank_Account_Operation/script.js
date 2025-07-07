/* Bank Account Operations (Functions + Parameters + Scope)
Problem:
-> Create a bankAccount object with a balance property.
-> Write a function deposit(amount) that adds money to the balance.
-> Write a function withdraw(amount) that subtracts money if sufficient funds exist.
-> Use function parameters to pass the amount.
-> Make sure the balance variable is scoped properly so both functions update the same value.
*/

// solution:
const bankAccount = {
    balance : 50000
};

// function to deposit Amount
function depositAmount(amount) {
    bankAccount.balance += amount;
    console.log(`Deposited ${amount} \nUpdated Balance: ${bankAccount.balance}`);
}

// function to withdraw amount
function withdrawAmount(amount) {
    if(bankAccount.balance >= amount) {
        bankAccount.balance -= amount;
        console.log(`Withdrawn ${amount}. \nRemaining balance: ${bankAccount.balance}`);
    } else {
        console.log("Insufficient Balance!");
    }
}

// call the functions
depositAmount(10000);
withdrawAmount(20000);
withdrawAmount(50000);
