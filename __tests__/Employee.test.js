const Employee = require('../lib/Employee');  //The specifying Constructor 

test('This Creates an employee object', () => { // The specifying object
    const employee = new Employee('Michael', 90, 'Michael.c.maresco@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('This gets employee name', () => { // Obtains the employees name
    const employee = new Employee('Michael', 90, 'Michael.c.maresco@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('This gets employee ID', () => { // Obtains the employees ID number
    const employee = new Employee('Michael', 90, 'Michael.c.maresco@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('This gets employee email', () => { // Obtains the employees email
    const employee = new Employee('Michael', 90, 'Michael.c.maresco@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('This gets role of employee', () => { // Obtains the specific role of the employee
    const employee = new Employee('Michael', 90, 'Michael.c.maresco@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 