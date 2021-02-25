const Employee = require("./Employee"); 

class Manager extends Employee {
    // Initialize the variables to be used
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.officeNum = officeNum;
    }

    // Getter functions
    getOfficeNum() {
        return this.officeNum;
    }

    getRole() {
        return "Manager";
    }

    createCard() {
        return `<div class="card manager"><header class="card-header"><p class="card-header-title">${super.getName()}<br>📑Manager</p></header><div class="card-content"><div class="content"><div class="bar">ID: ${super.getId()}</div><div class="bar">Email: <a href="mailto:${super.getEmail()}">${super.getEmail()}</a></div><div class="bar">Office: ${this.officeNum}</div></div></div></div>`
    }
}

module.exports = Manager;