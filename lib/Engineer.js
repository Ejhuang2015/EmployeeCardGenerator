const Employee = require("./Employee"); 

class Engineer extends Employee {
    // Initialize the variables to be used
    constructor(username) {
        this.username = username;
    }

    // Getter functions
    getUsername() {
        return this.username;
    }

    getRole() {
        return "Engineer";
    }

    createCard(name, id, email) {
        const engineer = new Employee(name, id, email)
        return `<div class="card engineer"><header class="card-header"><p class="card-header-title">${engineer.name}<br>💻Engineer</p></header><div class="card-content"><div class="content"><div class="bar">ID: ${engineer.id}</div><div class="bar">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></div><div class="bar">GitHub: <a href="https://github.com/${this.username}">${this.username}</a></div></div></div></div>`
    }
}

module.exports = Engineer;