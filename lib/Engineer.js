// this uses the Employee object
const Employee = require("./Employee");

// this takes from the employee object and uses the name, id, and email from the Employee object
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    super.role = "Engineer";
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
