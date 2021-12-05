class Profile {   
    constructor(firstName, lastName = '') {
       this.firstName = firstName;
       this.lastName = lastName;     
    }  
     
    getName() {     
      console.log(`Name: ${this.firstName} ${this.lastName}`);    
    } 
 }
 let profileObj = new Profile('Ashika', 'Satish');
 profileObj.getName();