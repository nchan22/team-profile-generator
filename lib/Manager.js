// this uses the Employee object
const Employee = require("./Employee");

// this takes from the employee object and uses the name, id, and email from the Employee object
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    super.role = "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
