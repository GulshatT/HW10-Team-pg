//const Employee = require("./Employee");

class Manager {
    constructor(name, id, email, office, role) {
        this.name = "";
        this.id = id;
        this.email = email;
        this.office = office;
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
    getOffice() {
        return this.office;
    }

    getRole() {
        return "Manager";
    }
}


module.exports = Manager;