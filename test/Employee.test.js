//const { isMainThread } = require("node:worker_threads");
const Employee = require("../lib/Employee");

//descrribe Employee
describe("Employee", () => {
//describe Initialization
describe("Initialization", () => {
    //test that it returns an object that is an instance of the employee class when called with the new keyword
    it("test that it returns an object that is an instance of the employee class when called with the new keyword", () => {
        // call the constructor
        const employee = new Employee();
        //check that it is an inatnce of Employee
        expect(employee instanceof Employee).toBe(true);
    });
    //test that it sets name property based on constructor argument
    it("it sets name property based on constructor argument", () => {
        const name = "Gulshat";
        const employee = new Employee(name);
        expect(employee.name).toBe(name);
    });
    //test that it sets id property based on constructor argument
    it("it sets id property based on constructor argument", () => {
        const id = 1;
        const employee = new Employee("", id);
        expect(employee.id).toBe(id);
    });
    //test that it sets email property based on constructor argument
    it("it sets name property based on constructor argument", () => {
        const email = "test@email.com";
        const employee = new Employee("", 0, email);
        expect(employee.email).toBe(email);
    });
})

//describe getName
describe("getName", () => {
    it("returns the name property when the getName() method is called", () => {
        const name = "Obi";
        const employee = new Employee(name);
        expect(employee.getName()).toBe(name);
    });
})
//describe getId
describe("getId", () => {
    it("returnes the id property when the getId() method is called", () => {
        const id = 1;
        const employee = new Employee("", id);
        expect(employee.getId()).toBe(id);
    });
})

//describe getEmail
describe("getEmail", () => {
    it("returnes the email property when the getEmail() method is called", () => {
        const email = "test@gmail.com";
        const employee = new Employee("", 0, email);
        expect(employee.getEmail()).toBe(email);
    });
})
//describe getRole
describe("getRole", () => {
    it("returnes Employee property when the getRole() method is called", () => {
        const employee = new Employee();
        expect(employee.getRole()).toBe("Employee");
    });
});
});