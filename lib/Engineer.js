const Employee = require("./Employee");

class Engineer {
    constructor(name, id, email, GitHub, role) {
        this.name = "";
        this.id = id;
        this.email = email;
        this.GitHub = GitHub;
        this.role = "Engineer";
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }

    getGitHub() {
        return this.GitHub;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;