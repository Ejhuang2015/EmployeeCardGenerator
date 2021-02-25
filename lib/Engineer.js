const Employee = require("./Employee"); 

class Engineer extends Employee {
    // Initialize the variables to be used
    constructor(name, id, email, username) {
        super(name, id, email)
        this.username = username;
    }

    // Getter functions
    getUsername() {
        return this.username;
    }

    getRole() {
        return "Engineer";
    }

    createCard() {
        return `<div class="card engineer"><header class="card-header"><p class="card-header-title">${super.getName()}<br>💻Engineer</p></header><div class="card-content"><div class="content"><div class="bar">ID: ${super.getId()}</div><div class="bar">Email: <a href="mailto:${super.getEmail()}">${super.getEmail()}</a></div><div class="bar">GitHub: <a href="https://github.com/${this.username}">${this.username}</a></div></div></div></div>`
    }
}

module.exports = Engineer;