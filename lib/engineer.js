// const Employee = require('../lib/classes.js)
   // In addition to Employee's properties and methods, Engineer will also have:
        class Engineer extends Employee {  
                // github  // GitHub username
            constructor (first, id, title, email,username){    
                super(first, id, title, email); 
                    this.github: username;
                    getGithub(){    
                        return this.github      
                    };    
                        
                    getRole(){    
                        return this.role // Overridden to return 'Engineer'
                    };     
                        
                    setRole(Engineer){
                        this.role = Engineer    
                    };


            }
        }       
        
       module.exports = Engineer