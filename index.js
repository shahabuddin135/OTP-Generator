#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlueBright("\n\t\tWELCOME TO OTP GENERATOR\t\n"));
while (true) {
    let answer = await inquirer.prompt({
        message: chalk.magentaBright("Do you want to Generate OTP?"),
        name: "confirm",
        type: "confirm",
    });
    let otp = Math.floor(Math.random() * 900000 + 100000);
    if (answer.confirm === false) {
        console.log(chalk.bgRedBright("\n\t\tBYE BYE\t\t\n"));
        break;
    }
    console.log(chalk.greenBright(otp));
}
