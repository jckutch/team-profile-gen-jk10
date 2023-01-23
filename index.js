// Global Varaiable

const Manager = require()
const Engineer = require()
const Intern = require()
const inquirer = require()
const fs = require()

// Array of questions for user input
// Manager Input
function manager() {
    inquirer.prompt ([
    {
        type: 'input',
        name: 'managerName',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What does the user need to install to run the project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What will the project be used for?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How does the user contribute to the project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What should the user know about tests for the project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['Apache', 'GPL', 'MIT', 'Mozilla', 'None']
    }
    ]
    )};