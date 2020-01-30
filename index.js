#! /usr/local/bin/node

const chalk = require('chalk');
const fs = require('fs');

if (fs.existsSync("package-lock.json") && fs.existsSync("yarn.lock")) {
    console.log(chalk.red.bold("This project has both package-lock and yarn.lock! Delete one of them!"));
} else if (fs.existsSync("package-lock.json")) {
    console.log(chalk.green("This project uses NPM."));
} else if(fs.existsSync("yarn.lock")) {
    console.log(chalk.green("This project uses Yarn."));
} else {
    console.log(chalk.red("This project doesn't use anything 🤔 ") + chalk.red.bold("npm i") + chalk.red(" or ") + chalk.red.bold("yarn") + chalk.red(" to start!"));
}