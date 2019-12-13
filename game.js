const fs = require("fs")
const Employee = require("./lib/Employee.js")

const inquirer = require("inquirer")

inquirer.prompt ([
    {
        type: "input",
        message: "Type in Employee Name",
        name: "name"

    },
    {
        type: "input",
        message: "Type in Employee ID",
        name: "id"

    },

    {
        type: "input",
        message: "Type in Employee E-mail",
        name: "email"

    },


]).then (function (answer) {
console.log(answer)
const newWorker = new Employee (answer.name, answer.id, answer.email)
const html = `
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
    <h6 class="card-subtitle mb-2 text-muted">${newWorker.id}</h6>

    <a href="mailto: ${newWorker.email}" class="card-link"> ${newWorker.email}</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>


</body>
</html>
`
 
 fs.writeFile("./templates/employee.html", html, function (err) {
    //  console.log("error?", err)  //run function
 })

    }
)




