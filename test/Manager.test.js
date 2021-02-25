const Manager = require("../lib/Manager"); 

describe("Can set the office number", () => {
    const manager = new Manager("A1");
    expect(manager.officeNum).toEqual("A1");
});

describe("Can get the role", () => {
    const manager = new Manager("A1");
    expect(manager.getRole()).toEqual("Manager");
});

describe("Can get the card HTML", () => {
    const manager = new Manager("A1")
    expect(manager.createCard("Scott",10,"fake@email.com")).toEqual(`<div class="card manager"><header class="card-header"><p class="card-header-title">Scott<br>📑Manager</p></header><div class="card-content"><div class="content"><div class="bar">ID: 10</div><div class="bar">Email: <a href="mailto:fake@email.com">fake@email.com</a></div><div class="bar">Office: 10</div></div></div></div>`)
})