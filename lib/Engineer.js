const Employee = require("./Employee"); // Specific constructor 

class Engineer extends Employee { // In this case, the specified constructor (engineer) has to extend to the (employee) constructor.
    constructor (name, id, email, github) {
        super (name, id, email);

        this.github = github; 
    }
    getGithub () { // This is another return as we've previously seen, it returns the 'github'. 
        return this.github;
    }
    getRole () { // Another return, this one specifically is designed to override the normal 'employee' role to an 'engineer'.
        return "Engineer";
    }
}
module.exports = Engineer; 