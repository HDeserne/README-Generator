console.clear()
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require("./generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Give a description of your project',
},
{
    type: 'input',
    name: 'install',
    message: 'How do we install dependencies?',
},
{
    type: 'input',
    name: 'application',
    message: 'What is the usage of your project?',
},
{
    type: 'input',
    name: 'contributers',
    message: 'How to contribute to the project',
},
{
    type: 'input',
    name: 'test',
    message: 'Test instructions:',
},
{
    type: 'list',
    choices: ["MIT", "GNU", "Apache-2.0", "ISC", "Unlicense"],
    name: 'licenses',
    message: 'Pick the licensing',
},
{
    type: 'input',
    name: 'github',
    message: 'Enter your Github username',
},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email',
},

];

// fs.writeFile


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('README Generated!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then((data) => {
            console.log(data.licenses)
            writeToFile(`./data/${data.title}.md`, generateMD(data))

        }
        )
}

// Function call to initialize app
init();