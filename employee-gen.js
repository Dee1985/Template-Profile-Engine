
    const fs = require("fs")
    const Employee = require("./lib/Employee.js")
    
    const inquirer = require("inquirer")
    

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
   
    console.log("Generator complete. Thank you!")
    const newWorker = new Employee (answer.name, answer.id, answer.email, answer.response)
    
    
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
        <h5 class="card-title">${newWorker.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${newWorker.role}</h6>
        <h6 class="card-subtitle mb-2 text-muted">${newWorker.id}</h6>
    
        <a href="mailto: ${newWorker.email}" class="card-link"> Email: ${newWorker.email}</a>
       
      </div>
    </div>
    
    
    </body>
    </html>
    `
     
     fs.writeFile("./templates/employee.html", html, function (err) {
        
     })
    
        }
    )
    
    }
    
    profileGen();
    
    
