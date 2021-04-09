//const { isMainThread } = require("node:worker_threads");
const Engineer = require("../lib/Engineer");

const engineerTest = new Engineer("Jonathan Gardner", 3, "engineer@gmail.com", "Engineer")

//descrribe Employee
describe("Engineer", () => {
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
        const engineer = new Engineer(name);
        expect(engineer.name).toBe(name);
    });
    //test that it sets id property based on constructor argument
    it("it sets id property based on constructor argument", () => {
        const id = 3;
        const engineer = new Engineer("", id);
        expect(engineer.id).toBe(id);
    });
    //test that it sets email property based on constructor argument
    it("it sets name property based on constructor argument", () => {
        const email = "engineer@email.com";
        const engineer = new Engineer("", 0, email);
        expect(engineer.email).toBe(email);
    });
})

//describe getName
describe("getName", () => {
    it("returns the name property when the getName() method is called", () => {
        const name = "";
        const engineer = new Engineer(name);
        expect(engineer.getName()).toBe(name);
    });
})
//describe getId
describe("getId", () => {
    it("returnes the id property when the getId() method is called", () => {
        const id = 3;
        const engineer = new Engineer("", id);
        expect(engineer.getId()).toBe(id);
    });
})

//describe getEmail
describe("getEmail", () => {
    it("returnes the email property when the getEmail() method is called", () => {
        const email = "engineer@email.com";
        const engineer = new Engineer("", 0, email);
        expect(engineer.getEmail()).toBe(email);
    });
})

//describe getGitHub
describe("getGitHub", () => {
    it("returnes the GitHub property when the getEmail() method is called", () => {
        const GitHub = "JonathanG";
        const engineer = new Engineer("", 0, "", GitHub);
        expect(engineer.getGitHub()).toBe(GitHub);
    });
})
//describe getRole
describe("getRole", () => {
    it("returnes Engineer property when the getRole() method is called", () => {
        const engineer = new Engineer("", 0, "", "");
        expect(engineer.getRole()).toBe("Engineer");
    });
});