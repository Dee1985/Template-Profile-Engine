

    const fs = require("fs")
    const Employee = require("./lib/Employee.js")
    const Engineer = require("./lib/Engineer.js")
    const Manager = require("./lib/Manager.js")
    const Intern = require("./lib/Intern.js")
    
    const inquirer= require("inquirer")
    
    const teamMembers = []
    function profileGen(params) {
        
    console.log("please answer all required fields")
    inquirer.prompt ([
        {
            type: "input",
            message: "Enter Employee Name",
            name: "name"
    
        },
        {
            type: "input",
            message: "Enter Employee ID",
            name: "id"
    
        },
        {
            type: "list",
            message: "Enter Employee Role",
            choices: ['Engineer', 'Intern', 'Manager'],
            name: "role"
        },
        {
            type: "input",
            message: "Enter Employee E-mail",
            name: "email"
    
        },
         {
            type: "input",
            message: "Would you like to add any other team members?",
            name: "response"
    
        },
    
    ]).then (function (answer) {
        if (answer.role === "Engineer") {
            const newEngineer = new Engineer (answer.name, answer.id, answer.email) //add answer.github later
            teamMembers.push(newEngineer)
            console.log(teamMembers)
        
        } else if (answer.role === "Manager"){
            const newManager = new Manager (answer.name, answer.id, answer.email)
            teamMembers.push(newManager)
        }

         else if (answer.role === "Intern"){
            const newIntern = new Intern (answer.name, answer.id, answer.email)
            teamMembers.push(newIntern)
        };

    if (answer.response === "yes"){
        return profileGen()
    }else{
         generator();
    }
    console.log("Generator complete. Thank you!")
    })
    }
    
    
    
    
     function generator (){
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
    
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${teamMembers[0].name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${teamMembers[0].role}</h6>
        <h6 class="card-subtitle mb-2 text-muted">${teamMembers[0].id}</h6>
    
        <a href="mailto: ${teamMembers[0].email}" class="card-link"> Email: ${teamMembers[0].email}</a>
       
      </div>
    </div>
    
    
    </body>
    </html>
    `
     fs.writeFile("./templates/employee-test.html", html, function (err) {
         console.log("@#&$%@#&$%&#@$%&#@$%&#@$%&#@$%%$%&#%@$&^%#@$&^#@%$&@#%$&#@$%&#@$%&@#$%&#@$%&#@%$&#@$%&@$%&#@$%")
        if (err) throw err;
        console.log("success")
     })  
     }
    profileGen();
    
    
    
 
    
    
