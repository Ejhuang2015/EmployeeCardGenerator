const Employee = require("../lib/Employee"); 

// Test from class
describe("Can set employee name", () => {
    const employee = new Employee("Mike", 12, "Mike@Fakeinator.com");
    expect(employee.getName()).toEqual("Mike");
});

describe("Can set employee id", () => {
    const employee = new Employee("Mike", 12, "Mike@Fakeinator.com");
    expect(employee.getId()).toEqual(12);
});

describe("Can set employee email", () => {
    const employee = new Employee("Mike", 12, "Mike@Fakeinator.com");
    expect(employee.getEmail()).toEqual("Mike@Fakeinator.com");
});

describe("Can get role", () => {
    const employee = new Employee("Mike", 12, "Mike@Fakeinator.com");
    expect(employee.getRole()).toEqual("Employee");
});