// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
require ("Employee.js");

class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
}

Manager.prototype.getOfficeNumber = function() {
    return this.officeNumber;
}

module.exports = Manager;