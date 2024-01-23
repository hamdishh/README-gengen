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
    
}
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
