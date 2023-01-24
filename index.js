// Global Varaiable

const Manager = require()
const Engineer = require()
const Intern = require()
const fs = require()
const inquirer = require()


// Create objects for each team member 
myTeam = [];

function runApp () {

    function team () {
      inquirer.prompt([{
        type: "list",
        message: "Title of employee to add to team?",
        name: "employeeAdd",
        choices: ["Manager", "Engineer", "Intern", "There are no more member's needed."]
    }]).then(function (userInput) {
        switch(userInput.employeeAdd) {
          case "Manager": managerAdd(); break;
          case "Engineer": engineerAdd(); break;
          case "Intern": internAdd(); break;
          default:
            htmlBuilder();
        }
      })
    } 

// Array of questions for user input
// Manager Input
function managerAdd() {
    inquirer.prompt ([
    {
        type: 'input',
        name: 'managerName',
        message: "Enter manager's name.",
    },
    {
        type: 'input',
        name: 'managerId',
        message: "Enter manager's employee ID.",
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "Enter manager's email address.",
    },
    {
        type: 'input',
        name: 'managerNumber',
        message: "Enter manager's office number.",
    },
    ]
    )};

// Engineer Input
    function engineerAdd() {
        inquirer.prompt ([
        {
            type: 'input',
            name: 'engineerName',
            message: "Enter engineer's name.",
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "Enter engineer's employee ID.",
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "Enter engineer's email address.",
        },
        {
            type: 'input',
            name: 'engineerNumber',
            message: "Enter engineer's GitHub username.",
        },
        ]
        )};


// Intern Input
    function internAdd() {
        inquirer.prompt ([
        {
            type: 'input',
            name: 'internName',
            message: "Enter intern's name.",
        },
        {
            type: 'input',
            name: 'internId',
            message: "Enter intern's employee ID.",
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Enter intern's email address.",
        },
        {
            type: 'input',
            name: 'internNumber',
            message: "Enter intern's school.",
        },
        ]
        )};
    }

        runApp();