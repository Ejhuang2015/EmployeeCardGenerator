const Manager = require("../lib/Manager"); 

// Test from class
describe("Manager", () => {
    const name = "Scott";
    const manager = new Manager(name);

    expect(manager.name).toEqual("Scott");
});

describe("Can set manager email", () => {
    const email = "Scott@Fakeinator.com";
    const manager = new Manager("Scott", 1, email);

    expect(manager.getEmail()).toEqual("Scott@Fakeinator.com");
});