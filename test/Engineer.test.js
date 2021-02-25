const Engineer = require("../lib/Engineer"); 

describe("Can set the username", () => {
    const engineer = new Engineer("Bobby2020");
    expect(engineer.username).toEqual("Bobby2020");
});

describe("Can get the role", () => {
    const engineer = new Engineer("Bobby2020");
    expect(engineer.getRole()).toEqual("Engineer");
});

describe("Can get the card HTML", () => {
    const engineer = new Engineer("Bobby2020")
    expect(engineer.createCard("Bobby",14,"fake@email.com")).toEqual(`<div class="card engineer"><header class="card-header"><p class="card-header-title">Bobby<br>💻Engineer</p></header><div class="card-content"><div class="content"><div class="bar">ID: 14</div><div class="bar">Email: <a href="mailto:fake@email.com">fake@email.com</a></div><div class="bar">GitHub: <a href="https://github.com/Bobby2020">Bobby2020</a></div></div></div></div>`)
})