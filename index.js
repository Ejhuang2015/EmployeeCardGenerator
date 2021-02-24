const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee"); 
const { finished } = require("stream");


// Create a manager.
const addManager = [
    {
        type: 'input',
        name: 'name',
        message: "Enter your team manager's name: ",
        default: "Scott",
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the manager's ID: ",
        default: "001",
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the manager's email address: ",
        default: 'manager@fakinator.com',
    },
    {
        type: 'input',
        name: 'office',
        message: "Enter the team's office number: ",
        default: "A-01",
    },
]

// Add more employees or finish
const addMore = {
    type: 'list',
    name: "choice",
    message: "Would you like to add an engineer, add an intern, or finish the team?",
    choices: ["Engineer", "Intern", "Finish"],
}

// Add an engineer
const addEngineer = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the engineer's name: ",
        default: "Mike",
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the engineer's ID: ",
        default: "101",
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the engineer's email address: ",
        default: 'engineer1@fakinator.com',
    },
    {
        type: 'input',
        name: 'username',
        message: "Enter the engineer's GitHub username: ",
        default: "FearMichael",
    },
]

// Add an intern
const addIntern = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the intern's name: ",
        default: "Edward",
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the intern's ID: ",
        default: "201",
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the engineer's email address: ",
        default: 'intern1@fakinator.com',
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter the intern's school name: ",
        default: "UNH",
    },
]

function start() {
    inquirer.prompt(addManager).then(answer => {
        // Save the answer's to the manager HTML card
        branch();
    })
}

function branch() {
    inquirer.prompt(addMore).then(answer => {
        if (answer.choice == "Engineer") {
            engineerPath();
        }
        else if (answer.choice == "Intern") {
            internPath;
        }
        else {
            finished();
        }
    })
}

function engineerPath() {
    inquirer.prompt(addEngineer).then(answer => {
        // Save the answer's to an engineer HTML card
        branch();
    })
}

function internPath() {
    inquirer.prompt(addIntern).then(answer => {
        // Save the answer's to an intern HTML card
        branch();
    })
}

function finished() {
    // Generate HTML and end
}

// Start the program
start();