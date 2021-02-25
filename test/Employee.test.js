const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("getName", () => {
        it("should return employee name", () => {
            const employee = new Employee("Mike", 12, "Mike@Fakeinator.com");
            expect(employee.getName()).toEqual("Mike");
        });
    });

    describe("getId", () => {
        it("should return employee id", () => {
            const employee = new Employee("Mike", 12, "Mike@Fakeinator.com");
            expect(employee.getId()).toEqual(12);
        });
    });

    describe("getEmail", () => {
        it("should return employee email", () => {
            const employee = new Employee("Mike", 12, "Mike@Fakeinator.com");
            expect(employee.getEmail()).toEqual("Mike@Fakeinator.com");
        });
    });

    describe("getRole", () => {
        it("should return role", () => {
            const employee = new Employee("Mike", 12, "Mike@Fakeinator.com");
            expect(employee.getRole()).toEqual("Employee");
        });
    });
});


