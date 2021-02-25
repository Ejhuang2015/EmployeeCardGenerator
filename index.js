const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager"); 
const Engineer = require("./lib/Engineer"); 
const Intern = require("./lib/Intern"); 
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
        name: 'officeNum',
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
    // Generate/check for the dist folder
    if (!fs.existsSync("./dist")) {
        fs.mkdirSync("./dist");
    }
    // Create the start of the HTML file
    const htmlHeader = `<!DOCTYPE html><html lang="en-us"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="Description"content="Javascript generated HTML that displays cards containing information about a team inputted by the user"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"><link rel="stylesheet" href="./style.css"><title>My Team</title></head><body><div class="header">My Team</div><div class="columns is-multiline">`;
    fs.writeFileSync('./dist/main.html', htmlHeader);
    // And CSS
    const cssMin = `.header {font-size: 25px;font-weight: bold;text-align: center;margin: auto;background-color:lightcoral;padding: 20px 0px;}.columns {margin: 20px auto;display: flex;flex-direction: row;justify-content: center;}.column {display: flex;flex-direction: row;justify-content: center;}.card {width: 300px;margin: 10px;}.card-header {background-color: pink;}.card-content {background-color:lavenderblush;}.bar {padding: 2px;border-radius: 2px;border: gray solid 1px;}`;
    fs.writeFileSync('./dist/style.css', cssMin);
    
    managerPath();
}

function managerPath() {
    inquirer.prompt(addManager).then(answer => {
        // Save the answer's to the manager HTML card
        const manager = new Manager(answer.name, answer.id, answer.email, answer.officeNum);
        fs.appendFileSync('./dist/main.html', manager.createCard());
        branch();
    })
}

function branch() {
    inquirer.prompt(addMore).then(answer => {
        if (answer.choice == "Engineer") {
            engineerPath();
        }
        else if (answer.choice == "Intern") {
            internPath();
        }
        else {
            finish();
        }
    })
}

function engineerPath() {
    inquirer.prompt(addEngineer).then(answer => {
        // Save the answer's to an engineer HTML card
        const engineer = new Engineer(answer.name, answer.id, answer.email, answer.username);
        fs.appendFileSync('./dist/main.html', engineer.createCard());

        branch();
    })
}

function internPath() {
    inquirer.prompt(addIntern).then(answer => {
        // Save the answer's to an intern HTML card
        const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
        fs.appendFileSync('./dist/main.html', intern.createCard());

        branch();
    })
}

function finish() {
    // Finish off the HTML file
    const htmlFooter = `</div></body></html>`;
    fs.appendFileSync('./dist/main.html', htmlFooter);
    console.log("Your team page has been created!");
}

// Start the program
start();