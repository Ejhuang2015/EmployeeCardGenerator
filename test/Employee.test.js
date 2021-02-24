const Employee = require("../lib/Employee"); 

// Test from class
describe("Employee", () => {
    const name = "Mike";
    const employee = new Employee(name);

    expect(employee.name).toEqual("Mike");
});

describe("Can set employee email", () => {
    const email = "Mike@Fakeinator.com";
    const employee = new Employee("Mike", 1, email);

    expect(employee.getEmail()).toEqual("Mike@Fakeinator.com");
});