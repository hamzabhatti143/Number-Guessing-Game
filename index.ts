#! usr/bin/env node

import inquirer from "inquirer"

let randomNumber = Math.floor(Math.random() * 6 + 1);

let answer = await inquirer.prompt(
    [
        {
            name: "number" , 
            message: "Enter Your Number between 1-6: " , 
            type: "number" 
        }
    ]
)

if(answer.number === randomNumber){
    console.log(`Your Guess is right!!`);
}
else{
    console.log(`Your Guess is Wrong  I won ${randomNumber}`);
}