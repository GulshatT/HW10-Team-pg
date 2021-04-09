//const { isMainThread } = require("node:worker_threads");
const Manager = require("../lib/Manager");

const managerTest = new Manager("Gulshat Tokhtarova", 2, "manager@gmail.com", "Manager")

//descrribe Employee
describe("Manager", () => {
//describe Initialization
// describe("Initialization", () => {
//     //test that it returns an object that is an instance of the employee class when called with the new keyword
//     it("test that it returns an object that is an instance of the engineer class when called with the new keyword", () => {
//         // call the constructor
//         const engineer = new Engineer();
//         //check that it is an instance of Employee
//         expect(engineer instanceof Engineer).toBe(true);
//     });
    //test that it sets name property based on constructor argument
    it("it sets name property based on constructor argument", () => {
        const name = "";
        const manager = new Manager(name);
        expect(manager.name).toBe(name);
    });
    //test that it sets id property based on constructor argument
    it("it sets id property based on constructor argument", () => {
        const id = "";
        const manager = new Manager("", id);
        expect(manager.id).toBe(id);
    });
    //test that it sets email property based on constructor argument
    it("it sets name property based on constructor argument", () => {
        const email = "manager@email.com";
        const manager = new Manager("", 0, email);
        expect(manager.email).toBe(email);
    });
})

//describe getName
describe("getName", () => {
    it("returns the name property when the getName() method is called", () => {
        const name = "";
        const manager = new Manager(name);
        expect(manager.getName()).toBe(name);
    });
})
//describe getId
describe("getId", () => {
    it("returnes the id property when the getId() method is called", () => {
        const id = 2;
        const manager = new Manager("", id);
        expect(manager.getId()).toBe(id);
    });
})

//describe getEmail
describe("getEmail", () => {
    it("returnes the email property when the getEmail() method is called", () => {
        const email = "manager@email.com";
        const manager = new Manager("", 0, email);
        expect(manager.getEmail()).toBe(email);
    });
})
//describe getRole
describe("getRole", () => {
    it("returnes Manager property when the getRole() method is called", () => {
        const manager = new Manager("", 0, "");
        expect(manager.getRole()).toBe("Manager");
    });
});