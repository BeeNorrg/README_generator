// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
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
function writeToFile() {
    let newREADME = generateMarkdown;
    //create new readme in generated folder, if there's an error throw and error
    fs.writeFile('./generated/README.md', newREADME, (err) => err ? console.log(err) : console.log('README successfully generated!'));
}

// TODO: Create a function to initialize app
function init(){
    return inquirer.prompt (questions).then((answers)=> {
        writeToFile();
    })
};

// Function call to initialize app
init();
