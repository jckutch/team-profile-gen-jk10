const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

test("Creates office number.", () => {
    const testOfficeNumber = 1;
    const employeeInstance = new Manager("John", 1, "jkutch@megacorp.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Test officeNumber.", () => {
    const testOfficeNumber = 1;
    const employeeInstance = new Manager("John", 1, "jkutch@megacorp.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Test role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("John", 1, "jkutch@megacorp.com", 1);
    expect(employeeInstance.getRole()).toBe(returnValue);
});