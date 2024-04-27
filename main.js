#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyanBright("Welcome to our word counter application"));
const wordanswer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.greenBright("please write your sentence or paragraph it can count your words "),
    },
]);
const wordcounter = wordanswer.Sentence.trim().split(" ");
console.log(chalk.redBright(`your sentence word is  : `), chalk.yellowBright(`${wordcounter.length}`));
console.log(chalk.magentaBright("Thankyou for using this application"));
