// this uses the Employee object
const Employee = require("./Employee");

// this takes from the employee object and uses the name, id, and email from the Employee object
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    super.role = "Intern";
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
