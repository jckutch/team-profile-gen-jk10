const Engineer = require("../lib/engineer");

test("Creates a github.", () => {
    const testGithub = "jckutch";
    const employeeInstance = new Engineer("John", 2, "jkutch@megacorp.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Returns Github.", () => {
    const testGithub = "jckutch";
    const employeeInstance = new Engineer("John", 2, "jkutch@megacorp.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Test role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("John", 2, "jkutch@megacorp.com", "jckutch");
    expect(employeeInstance.getRole()).toBe(returnValue);
});