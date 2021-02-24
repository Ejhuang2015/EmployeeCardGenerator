const Employee = require("./Employee"); 

// const employee = new Employee("Rani", 001, "rani@email.com");

class Manager extends Employee {
    // Initialize the variables to be used
    constructor(id, officeNum) {
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

    // Functions we need
}

module.exports = Manager;