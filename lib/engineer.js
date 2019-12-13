const Employee = require("./Employee.js");
   // In addition to Employee's properties and methods, Engineer will also have:
        console.log("hello",Employee)
        class Engineer extends Employee {  
                // github  // GitHub username
            constructor (first, id, email, github){    
                super(first, id, email); 
                    this.github= github;
                       
                       this.getGithub = () => {
                            return this.github      
                    }
                            
                        this.getRole = () => {  
                            return this.constructor.name; // Overridden to return 'Engineer'
                        }     
                            
                        


            }
        }       
        
       module.exports = Engineer;