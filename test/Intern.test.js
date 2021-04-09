//const { isMainThread } = require("node:worker_threads");
const Intern = require("../lib/Intern");

const internTest = new Intern("Christian Vasquez", 4, "intern@gmail.com", "Intern")

//descrribe Intern
describe("Intern", () => {
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
        const intern = new Intern(name);
        expect(intern.name).toBe(name);
    });
    //test that it sets id property based on constructor argument
    it("it sets id property based on constructor argument", () => {
        const id = 4;
        const intern = new Intern("", id);
        expect(intern.id).toBe(id);
    });
    //test that it sets email property based on constructor argument
    it("it sets name property based on constructor argument", () => {
        const email = "intern@email.com";
        const intern = new Intern("", 0, email);
        expect(intern.email).toBe(email);
    });
})

//describe getName
describe("getName", () => {
    it("returns the name property when the getName() method is called", () => {
        const name = "";
        const intern = new Intern(name);
        expect(intern.getName()).toBe(name);
    });
})
//describe getId
describe("getId", () => {
    it("returnes the id property when the getId() method is called", () => {
        const id = 4;
        const intern = new Intern("", id);
        expect(intern.getId()).toBe(id);
    });
})

//describe getEmail
describe("getEmail", () => {
    it("returnes the email property when the getEmail() method is called", () => {
        const email = "intern@email.com";
        const intern = new Intern("", 0, email);
        expect(intern.getEmail()).toBe(email);
    });
})
//describe getRole
describe("getRole", () => {
    it("returnes Engineer property when the getRole() method is called", () => {
        const intern = new Intern("", 0, "");
        expect(intern.getRole()).toBe("Intern");
    });
});