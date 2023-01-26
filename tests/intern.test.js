const Intern = require("../lib/intern");

test("Creates school.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("John", 3, "jkutch@megacorp.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Test school name.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("John", 3, "jkutch@megacorp.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Test role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("John", 3, "jkutch@megacorp.com", "School Name");
    expect(employeeInstance.getRole()).toBe(returnValue);
});