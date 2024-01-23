const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'Please enter your projects name:'
},
{
    type: 'input',
    name: 'description',
    message: 'Please provide a description for your project:'
},
{
    type: 'input',
    name: 'challenge',
    message: 'Please enter the instructions of your challenge',
},
{
    type: 'input',
    name: 'username',
    message: 'Please enter your GitHub username:',
},
{
    type: 'input',
    name: 'email',
    message: 'Please enter your email address',
},
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        const readmeContent = generateMarkdown(answers);
        const outputDir = path.resolve(__dirname, 'output', 'hamdishh');
        const outputFileName = path.join(outputDir, 'README.md');

        //Create if statement to check if output directory exists
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        fs.writeToFile(outputFileName, readmeContent);
        console.log('README.md generated successfully at ${outputFileName}`);');
    })
    .catch((error) => {
        console.error('An error has occurred, README.md cannot be generated:', error);
    });
}

// function call to initialize program
init();
