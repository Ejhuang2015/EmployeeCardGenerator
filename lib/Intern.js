const Employee = require("./Employee"); 

class Intern extends Employee {
    // Initialize the variables to be used
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    // Getter functions
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }

    createCard() {
        return `<div class="card intern"><header class="card-header"><p class="card-header-title">${super.getName()}<br>🎓Intern</p></header><div class="card-content"><div class="content"><div class="bar">ID: ${super.getId()}</div><div class="bar">Email: <a href="mailto:${super.getEmail()}">${super.getEmail()}</a></div><div class="bar">School: ${this.school}</div></div></div></div>`
    }
}

module.exports = Intern;