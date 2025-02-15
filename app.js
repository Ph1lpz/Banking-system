class BankAccount{
    constructor(name , age ,balance){
        this.name = name
        this.age = age
        this.balance = balance;
        this.address = function(city , street , buildingNumber ,appartmentNumber){
            return {
                city:city,
                street:street,
                buildingNumber:buildingNumber,
                appartmentNumber:appartmentNumber
            }
        }
    }

    accountinfo(){
       console.log(`Info \nName: ${this.name} \nBalance: ${this.balance} `)
    }

    deposit(money){
        return new Promise((resolve , reject) => {
            setTimeout(() => {
                this.balance += money
                resolve(`Your balance: ${this.balance}`)
            },1000)
        })
    }

    balanceCompare(money){
        return new Promise((resolve , reject) => {
            let gotMoney = false
            if(this.balance >= money){
                gotMoney = true
                setTimeout(() => {
                    resolve(gotMoney)
                }, 1000);
            }else{
                reject('You dont have enough money')
            }
        })
    }

    async withdraw(money){
        console.log('Checking your account balance...');
        
        try {
            const gotMoney = await this.balanceCompare(money);  // this returns a Promise
            if (gotMoney) {
                setTimeout(() => {
                    this.balance -= money;
                    console.log(`Withdrawal successful. Your new balance is: ${this.balance}`);
                }, 1000);
            }
        } catch (e) {
            console.log(e);
        }
    }
}



const bankAccount = new BankAccount("jake" , 20 , 20000)
bankAccount.address("any city " , "empty street" , 10 , 12)


// console.log(bankAccount.address("home" , "awdawd" , 10 , 12))

// bankAccount.accountinfo()

// bankAccount.deposit(20).then((result) => {
//     console.log(result)
// })

// bankAccount.deposit(100).then(result => console.log(result))


// console.log(bankAccount.balance)

