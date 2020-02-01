const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");

let teamRoster = [];
let cardToDisplay = [];

const askQ = function(answer) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "enter employee name",
        name: "name"
      },
      {
        type: "input",
        message: "enter employee id",
        name: "id"
      },
      {
        type: "input",
        message: "enter employee email",
        name: "email"
      },
      {
        type: "list",
        name: "role",
        message: "select employee role",
        choices: ["Manager", "Engineer", "Intern"]
      }
    ])
    .then(function(answer) {
      console.log(answer);
      if (answer.role === "Manager") {
        askMangerQs(answer);
      } else if (answer.role === "Engineer") {
        askEngineerQs(answer);
      } else if (answer.role === "Intern") {
        askInternQs(answer);
      }
    });
};
askQ();

function askMangerQs(firstAnswers) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "enter manager telephone number",
        name: "officeNumber"
      },
      {
        type: "list",
        name: "response",
        message: "Would you like to add any other team members?",
        choices: ["yes", "no"]
      }
    ])
    .then(function(answer) {
      let newManager = new Manager(
        firstAnswers.name,
        firstAnswers.id,
        firstAnswers.email,
        answer.officeNumber
      );
      teamRoster.push(newManager);
      console.log(newManager);
      if (answer.response === "yes") {
        askQ();
      } else {
        generator("profile.html");
        return console.log("Generator complete.");
      }
    });
}

function askEngineerQs(firstAnswers1) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "enter engineer github username",
        name: "github"
      },
      {
        type: "list",
        name: "response",
        message: "Would you like to add any other team members?",
        choices: ["yes", "no"]
      }
    ])
    .then(function(answer) {
      let newEngineer = new Engineer(
        firstAnswers1.name,
        firstAnswers1.id,
        firstAnswers1.email,
        answer.github
      );
      teamRoster.push(newEngineer);
      console.log(newEngineer);
      console.log(teamRoster);
      if (answer.response === "yes") {
        askQ();
      } else {
        generator("profile.html");
        return console.log("Generator complete.");
      }
    });
}

function askInternQs(firstAnswers2) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "enter Intern school name",
        name: "school"
      },
      {
        type: "list",
        name: "response",
        message: "Would you like to add any other team members?",
        choices: ["yes", "no"]
      }
    ])
    .then(function(answer) {
      let newIntern = new Intern(
        firstAnswers2.name,
        firstAnswers2.id,
        firstAnswers2.email,
        answer.school
      );
      teamRoster.push(newIntern);
      console.log(newIntern);
      if (answer.response === "yes") {
        askQ();
      } else {
        generator("profile.html");
        return console.log("Generator Complete.");
      }
    });
}

function generator(htmlName) {
  console.log(teamRoster);
  let internCard = function(intern) {
    // console.log("about to make intern", intern);
    return `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${intern.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${intern.id}</h6>
        <h6 class="card-subtitle mb-2 text-muted">${intern.role}</h6>
        <h6 class="card-subtitle mb-2 text-muted">${intern.school}</h6>
        <a href="mailto: ${intern.email}" class="card-link"> Email: ${intern.email}</a>
      </div>
    </div>
    `;
  };

  let managerCard = function(manager) {
    // console.log("about to make Manager", manager);
    return `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${manager.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${manager.id}</h6>
        <h6 class="card-subtitle mb-2 text-muted">${manager.role}</h6>
        <h6 class="card-subtitle mb-2 text-muted">${manager.officeNumber}</h6>
        <a href="mailto: ${manager.email}" class="card-link"> Email: ${manager.email}</a>
      </div>
    </div>
    `;
  };

  let engineerCard = function(engineer) {
    // console.log("about to make Engineer", engineer);
    return `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${engineer.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${engineer.id}</h6>
        <h6 class="card-subtitle mb-2 text-muted">${engineer.role}</h6>
        <h6 class="card-subtitle mb-2 text-muted">${engineer.github}</h6>
        <a href="mailto: ${engineer.email}" class="card-link"> Email: ${engineer.email}</a>
      </div>
    </div>
    `;
  };

  for (let i = 0; i < teamRoster.length; i++) {
    if (teamRoster[i].role === "Intern") {
      cardToDisplay.push(internCard(teamRoster[i]));
    } else if (teamRoster[i].role === "Manager") {
      cardToDisplay.push(managerCard(teamRoster[i]));
    } else if (teamRoster[i].role === "Engineer") {
      cardToDisplay.push(engineerCard(teamRoster[i]));
    }
  }

  console.log("$$$$$$", cardToDisplay);

  let html = `
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
     ${cardToDisplay}
    </body>
    </html>
    `;
  fs.writeFile(htmlName, html, function(err) {
    if (err) throw err;
    console.log("success");
  });
}
