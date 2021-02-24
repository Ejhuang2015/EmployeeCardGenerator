// const employee = new Employee("Rani", 001, "rani@email.com");
class Engineer {
    // Initialize the variables to be used
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Getter functions
    getName() {
        return this.name;
    }
    
    getId() {
        return this.id;
    }
    
    getEmail() {
        return this.email;
    }

    getRole() {
        return "Engineer";
    }

    // Functions we need
}

module.exports = Engineer;