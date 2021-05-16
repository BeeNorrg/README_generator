// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project\'s title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter your installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter your usage instructions',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Enter your contribution guidelines',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Enter your testing criteria',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you be using?',
        choices:[ 'Apache', 'GNU', 'MIT', 'BSD', 'Unlicense']
      },
      {
        type: 'input',
        name: 'githubUserName',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
