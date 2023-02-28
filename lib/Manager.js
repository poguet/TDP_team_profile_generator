const Employee = require('./Employee')

class Manager extends Employee{
    constructor (name, email, id, officenumber) {
        super(name, email, id)
        this.officenumber = officenumber;
        this.role = "Manager";
    }

    getOfficeNumber() {
        return this.officenumber
    }

    getRole() {
        return this.role
    }
}

module.exports = Manager