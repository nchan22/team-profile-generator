// this file will be used to test the specific function in TDD
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Bob", 1, "bobtest@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Bob", 1, "bobtest@test.com", testValue);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 1001;
  const e = new Manager("Bob", 1, "bobtest@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
