// Global Varaiable

const Manager = require()
const Engineer = require()
const Intern = require()
const inquirer = require()
const fs = require()

// Array of questions for user input
// Manager Input
function managerAdd() {
    inquirer.prompt ([
    {
        type: 'input',
        name: 'managerName',
        message: "What is the manager's name?",
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the manager's employee ID?",
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the manager's email address?",
    },
    {
        type: 'input',
        name: 'managerNumber',
        message: "What is the manager's office number?",
    },
    ]
    )};

// Engineer Input
    function engineerAdd() {
        inquirer.prompt ([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?",
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is the engineer's employee ID?",
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email address?",
        },
        {
            type: 'input',
            name: 'engineerNumber',
            message: "What is the engineer's GitHub username?",
        },
        ]
        )};


// Intern Input
    function engineerAdd() {
        inquirer.prompt ([
        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name?",
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the intern's employee ID?",
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's email address?",
        },
        {
            type: 'input',
            name: 'internNumber',
            message: "What is the intern's school?",
        },
        ]
        )};