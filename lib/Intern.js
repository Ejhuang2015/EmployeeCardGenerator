const Employee = require("./Employee"); 

// const employee = new Employee("Rani", 001, "rani@email.com");

class Intern extends Employee {
    // Initialize the variables to be used
    constructor(school) {
        this.school = school;
    }

    // Getter functions
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }

    createCard(name, id, email) {
        const intern = new Employee(name, id, email)
        return `<div class="card intern"><header class="card-header"><p class="card-header-title">${intern.name}<br>🎓Intern</p></header><div class="card-content"><div class="content"><div class="bar">ID: ${intern.id}</div><div class="bar">Email: <a href="mailto:${intern.email}">${intern.email}</a></div><div class="bar">School: ${this.school}</div></div></div></div>`
    }
}

module.exports = Intern;