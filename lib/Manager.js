const Employee = require('./Employee'); // Specific Constructor

class Manager extends Employee { // In this case, the specified constructor (manager) has to extend to the (employee) constructor.
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // override employee role to manager 
    getRole () { // An override from 'employee' to 'manager'
        return "Manager";
    }
}
module.exports = Manager; 