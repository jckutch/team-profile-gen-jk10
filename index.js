// Global Varaiable

const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js")
const Intern = require("./lib/Intern.js")
const fs = require("fs")
const generateTeam = require()
const inquirer = require("inquirer")
const outputPath = path.join("path");


// Create objects for each team member 
myTeam = [];

function runApp () {

    function myTeam () {
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
            ]).then(answers => {
                const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber);
                teamArray.push(manager);
                myTeam();
            });
    }

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
            name: 'engineerGit',
            message: "Enter engineer's GitHub username.",
        },

        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.managerEmail, answers.engineerGit);
            teamArray.push(engineer);
            myTeam();
        });
    }

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
            name: 'internSchool',
            message: "Enter intern's school.",
        },

        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamArray.push(intern);
            myTeam();
         });
    }

    function htmlBuilder () {
        console.log(" My Team created!")
        fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")
    }
}
    myTeam();

    runApp();