
    // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
    class Employee {
        constructor (first, id, email, role, title){
       
            this.name = first
            this.role= role;
            this.id= id;
            this.title= title;
            this.email= email;
            this.getId = function(){
                return this.id;
            };
            this.getEmail = () =>{
                return this.email;
            };
            this.getRole = () =>{
                return this.role // Returns 'Employee'
            };
            this.getName = () =>{
                return this.name // Returns 'Employee'
            };
        }
    };
    
    
        
    
    module.exports = Employee    
    
         // The other three classes will extend Employee.
            
        // In addition to Employee's properties and methods, Manager will also have:
            // officeNumber
            // object.getRole() //
        class Manager extends Employee {
            constructor (first, last, id, title, email, officeNumber){
                super(first, last, id, title, email);  
                    this.officeNumber: officeNumber;
                    
            }
        }
            
        getRole(){
           return this.role //Overridden to return 'Manager'  
        };
            
        setRole(Manager){
           this.role = Manager     
        };      
            
            
        // In addition to Employee's properties and methods, Engineer will also have:
        class Engineer extends Employee {  
                // github  // GitHub username
            constructor (first, last, id, title, email,username){    
                super(first, last, id, title, email); 
                    this.github: username;
            }
        }       
        
        getGithub(){    
           return this.github      
        };    
            
        getRole(){    
            return this.role // Overridden to return 'Engineer'
        };     
            
        setRole(Engineer){
            this.role = Engineer    
        };
            
        // In addition to Employee's properties and methods, Intern will also have:
            
        class Intern extends Employee {
            constructor (first, last, id, title, email, school){
                super(first, last, id, title, email);  
                    this.school: school;   
            }
        }
            
        getSchool(){
            return this.school;
        };
            
        getRole(){
            return this.role;
        }; 
        setRole(Intern){
            this.role = Intern // Overridden to return 'Intern'
        };
        
    
