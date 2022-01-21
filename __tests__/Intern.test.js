const Intern = require('../lib/Intern'); //The specifying Constructor 

test('This creates an Intern object', () => { // The specifying object
    const intern = new Intern('Michael', 90, 'Michael.c.maresco@gmail', 'UTA');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('This gets the employees school', () => { // Getting the employees school
    const intern = new Intern('Michael', 90, 'Michael.c.maresco@gmail', 'UTA');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('This gets the role of employee', () => { // This gets the role of the employee
    const intern = new Intern('Michael', 90, 'Michael.c.maresco@gmail.com', 'UTA');

    expect(intern.getRole()).toEqual("Intern");
}); 