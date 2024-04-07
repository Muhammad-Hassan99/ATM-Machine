#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
let myBalance=10000;
let myPin=3399

let pinAnswer= await inquirer.prompt(
    [
        {
name:"pin",
message:"enter your pin",
type:"number",
}
]
)
if(pinAnswer.pin===myPin){
    console.log("Correct pin code!!")
    let operationAns= await inquirer.prompt([
        {
            name:"operation",
            message:"please select operation",
            type:"list",
            choices:["withdraw","check balance"]
        }
    ]
    )
  
    if(operationAns.operation==="withdraw"){
        let amountAns= await inquirer.prompt([{
            name:"amount",
            message:"enter your amount",
            type:"list",
            choices:["1000","2000","5000","7000","10000","15000","25000"]
        }])

       if(amountAns.amount>myBalance){
       console.log(chalk.red("Insufficient Balance :" + " Your total balance is " + myBalance))}
       else {myBalance -=amountAns.amount
        console.log(chalk.blue("Your remaining balance is :" + myBalance))
       }
      
    }
   

    else if(operationAns.operation==="check balance"){
        console.log("Your balance is :" + myBalance)
    }
}
else{
    console.log("Incorrect pin number")
}