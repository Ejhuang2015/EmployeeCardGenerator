const Intern = require("../lib/Intern"); 

describe("Intern", () => {
    describe("getSchool", () => {
        it("should return the school", () => {
            const intern = new Intern("Jack", 18, "fake@email.com", "UNH");
            expect(intern.getSchool()).toEqual("UNH");
        });
    });

    describe("getRole", () => {
        it("should return the role", () => {
            const intern = new Intern("Jack", 18, "fake@email.com", "UNH");
            expect(intern.getRole()).toEqual("Intern");
        });
    });

    describe("createCard", () => {
        it("should retunr the HTML", () => {
            const intern = new Intern("Jack", 18, "fake@email.com", "UNH");
            expect(intern.createCard()).toEqual(`<div class="card intern"><header class="card-header"><p class="card-header-title">Jack<br>🎓Intern</p></header><div class="card-content"><div class="content"><div class="bar">ID: 18</div><div class="bar">Email: <a href="mailto:fake@email.com">fake@email.com</a></div><div class="bar">School: UNH</div></div></div></div>`)
        });
    });
});


