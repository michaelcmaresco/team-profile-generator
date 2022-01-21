const Engineer = require('../lib/Engineer');  //The specifying Constructor 

test('This creates an Engineer object', () => { // The specifying object
    const engineer = new Engineer('Michael', 90, 'Michael.c.maresco@gmail', 'Michaelcmaresco');
    
    expect(engineer.github) .toEqual(expect.any(String));
});


test('This gets an engineer github value', () => { // This gets the engineers GitHub
    const engineer = new Engineer('Michael', 90, 'Michael.c.maresco@gmail', 'Michaelcmaresco');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('This gets the role of an employee', () => { // This gets the role of the employee
    const engineer = new Engineer('Michael', 90, 'Michael.c.maresco@gmail', 'Michaelcmaresco');

    expect(engineer.getRole()).toEqual("Engineer");
});