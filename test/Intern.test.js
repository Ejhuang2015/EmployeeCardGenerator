const Intern = require("../lib/Intern"); 

describe("Can set the school", () => {
    const intern = new Intern("UNH");
    expect(intern.school).toEqual("UNH");
});

describe("Can get the role", () => {
    const intern = new Intern("UNH");
    expect(intern.getRole()).toEqual("Intern");
});

describe("Can get the card HTML", () => {
    const intern = new Intern("UNH")
    expect(intern.createCard("Jack",18,"fake@email.com")).toEqual(`<div class="card intern"><header class="card-header"><p class="card-header-title">Jack<br>🎓Intern</p></header><div class="card-content"><div class="content"><div class="bar">ID: 18</div><div class="bar">Email: <a href="mailto:fake@email.com">fake@email.com</a></div><div class="bar">School: UNH</div></div></div></div>`)
})