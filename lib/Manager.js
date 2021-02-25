const Employee = require("./Employee"); 

class Manager extends Employee {
    // Initialize the variables to be used
    constructor(officeNum) {
        this.officeNum = officeNum;
    }

    // Getter functions
    getOfficeNum() {
        return this.officeNum;
    }

    getRole() {
        return "Manager";
    }

    createCard(name, id, email) {
        const manager = new Employee(name, id, email)
        return `<div class="card manager"><header class="card-header"><p class="card-header-title">${manager.name}<br>📑Manager</p></header><div class="card-content"><div class="content"><div class="bar">ID: ${manager.id}</div><div class="bar">Email: <a href="mailto:${manager.email}">${manager.email}</a></div><div class="bar">Office: ${this.officeNum}</div></div></div></div>`
    }
}

module.exports = Manager;