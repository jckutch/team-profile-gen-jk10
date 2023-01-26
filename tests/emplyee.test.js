const Employee = require("../lib/Employee");

test("Create new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Test role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("John", 2, "jckutch@megacorp.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})

test("Test name.", () => {
    const name = "John";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Test ID.", () => {
    const id = 2;
    const employeeInstance = new Employee("John", id);
    expect(employeeInstance.id).toBe(id);
})

test("Test email.", () => {
    const email = "jckutch@megacorp.com";
    const employeeInstance = new Employee("John", 2, email);
    expect(employeeInstance.email).toBe(email);
})



