const Manager = require("../lib/Manager"); 

describe("Manager", () => {
    describe("getOfficeNum", () => {
        it("should return the office number", () => {
            const manager = new Manager("Scott", 10, "fake@email.com", "A1")
            expect(manager.officeNum).toEqual("A1");
        });
    });

    describe("getRole", () => {
        it("should return the role", () => {
            const manager = new Manager("Scott", 10, "fake@email.com", "A1")
            expect(manager.getRole()).toEqual("Manager");
        });
    });
    
    describe("createCard", () => {
        it("should return the card HTML", () => {
            const manager = new Manager("Scott", 10, "fake@email.com", "A1")
            expect(manager.createCard("Scott",10,"fake@email.com")).toEqual(`<div class="card manager"><header class="card-header"><p class="card-header-title">Scott<br>📑Manager</p></header><div class="card-content"><div class="content"><div class="bar">ID: 10</div><div class="bar">Email: <a href="mailto:fake@email.com">fake@email.com</a></div><div class="bar">Office: A1</div></div></div></div>`)
        })
    });
});