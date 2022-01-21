const Manager = require('../lib/Manager'); //The specifying Constructor 

test('creates an Manager object', () => { // The specifying object
    const manager = new Manager('Michael', 90, 'Michael.c.maresco@gmail', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('gets role of employee', () => { // Getting the role from the specified 'get role' 
    const manager = new Manager('Michael', 90, 'Michael.c.maresco@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 