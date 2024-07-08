const chai = require("chai");
const expect = chai.expect;
const calculator = require("../problems/01-calculator");

describe("calculator", function() {
  it("calculator(123, '+', 456) returns 579", function () {
    expect(calculator(123, '+', 456)).to.eq(579);
  });
  it("calculator(987, '-', 654) returns 333", function () {
    expect(calculator(987, '-', 654)).to.eq(333);
  });
  it("calculator( 99, '*',   3) returns 297", function () {
    expect(calculator( 99, '*',   3)).to.eq(297);
  });
  it("calculator(111, '/',   3) returns 37", function () {
    expect(calculator(111, '/',   3)).to.eq(37);
  });
  it("calculator( 42, '?',  42) returns 'Invalid Operator'", function () {
    expect(calculator( 42, '?',  42)).to.eq('Invalid Operator');
  });
});
