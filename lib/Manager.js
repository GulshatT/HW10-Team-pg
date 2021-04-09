//const Employee = require("./Employee");

class Manager {
    constructor(name, id, email, role) {
        this.name = "";
        this.id = id;
        this.email = email;
        this.role = "Manager";
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

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;