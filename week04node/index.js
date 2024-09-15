// import chalk from "chalk";
// console.log(chalk.blue("Welcome to the Node.js course!"));
// console.log(chalk.red("This is dranger color"));
// const path=require("path");
// D:\JavaScriptWebDevelopment Crouse\Cohort\Cohort-3.0\week04node
// console.log(__dirname);
// console.log(path.join(__dirname, "../../index.js"));

// console.log(process.argv);

//so will try to read the file contain form the file by using the file loccation in argvs
// const { log } = require("console")
// const fn=require("fs")

// function readFile(){
//     fn.readFile(process.argv[2],"utf-8",(error,data) =>{
//         console.log(data)
//     })
// }

// readFile()

//Assignment to create a command line interface
// const { Command } = require("commander");
// const program = new Command();
// program.name("string-util")
//   .description("CLI to some JavaScript string utilities")
//   .version("0.8.0");

//   program.command('split')
//   .description('Split a string into substrings and display as an array')
//   .argument('<string>', 'string to split')
//   .option('--first', 'display just the first substring')
//   .option('-s, --separator <char>', 'separator character', ',')
//   .action((str, options) => {
//     const limit = options.first ? 1 : undefined;
//     console.log(str.split(options.separator, limit));
//   });

const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

// Name of the CLI you were building
// program
//   .name('File Counter')
//   .description('CLI to do file based tasks')
//   .version('0.8.0');

// program.command('count')
//   .description('Count the number of lines in a file')
//   .argument('<file>', 'file to count')
//   .action((file) => {
//     fs.readFile(file, 'utf8', (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         const lines = data.split('\n').length;
//         console.log(`There are ${lines} lines in ${file}`);
//       }
//     });
//   });

// program.parse();

program
  .name("Creating a new CLI")
  .description("Just help me to explore more about the commander")
  .version("1.1.2");

program
  .command("PrintName")
  .description("Just give your name it will greet you")
  .argument("<name>", "Pass your Good name")
  .action((name) => {
    console.log(`Namaste ${name}`);
  });

program.parse();
