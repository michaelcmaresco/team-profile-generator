class Employee { // Specific constructor 
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // These following lines can all be thought of as 'returns'. They all return something, for example, name,id,role,etc. 
    getName () {
        return this.name;
    }
    getId () {
        return this.id;
    }   
    getEmail () {
        return this.email;
    }
    getRole () {
        return 'Employee'; 
    }
};
module.exports = Employee; 