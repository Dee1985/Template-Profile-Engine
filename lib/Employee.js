
    // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
    class Employee {
        constructor (first, id, email){
       
            this.name = first;
            this.id= id;
            this.email= email;
            
            this.getId = function(){
                return this.id;
            }
            
            this.getEmail = () =>{
                return this.email;
            }
            this.getRole = () =>{
                return this.constructor.name // Returns 'Employee'
            }
            this.getName = () =>{
                return this.name 
            }
        }
    };
    
    module.exports = Employee;    
    
       