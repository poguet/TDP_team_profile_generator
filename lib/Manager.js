const Employee = require('./Employee')

class Manager extends Employee{
    constructor (name, email, id) {
        super(name, email, id)
        this.officenumber = officenumber;
        this.role = "manager";
    }

    getOfficeNumber() {
        return this.officenumber
    }

    getRole() {
        return this.role
    }
}

module.exports = Manager