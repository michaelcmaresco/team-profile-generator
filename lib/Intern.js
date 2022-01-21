const Employee = require('./Employee'); // Specific constructor 

class Intern extends Employee  { // In this case, the specified constructor (intern) has to extend to the (employee) constructor.
    constructor (name, id, email, school) {
        super (name, id, email); 

        this.school = school; 
    }

    getSchool () { // another return, specifically with the school input 
        return this.school;
    }

    // override employee role to intern
    getRole () { // overrides a given 'employee role' to an 'intern role'. 
        return "Intern";
    }
}
module.exports = Intern; 