const Employee = require("../lib/employee");

test("Create new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Test role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("John", 2, "jkutch@megacorp.com");
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
    const email = "jkutch@megacorp.com";
    const employeeInstance = new Employee("John", 2, email);
    expect(employeeInstance.email).toBe(email);
})

test("Creates name with geName.", () => {
    const testName = "John";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Creates ID with gitID.", () => {
    const testID = 2;
    const employeeInstance = new Employee("John", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Creates email link with getEmail.", () => {
    const testEmail = "jkutch@megacorp.com";
    const employeeInstance = new Employee("John", 2, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

