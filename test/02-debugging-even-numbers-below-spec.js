const chai = require("chai");
const expect = chai.expect;
const evenNumbersBelow = require("../problems/02-debugging-even-numbers-below");

describe("evenNumbersBelow", function() {
  it("evenNumbersBelow(0) returns []", function () {
    expect(evenNumbersBelow(0)).to.eql([]);
  });
  it("evenNumbersBelow(6) returns [0, 2, 4]", function () {
    expect(evenNumbersBelow(6)).to.eql([0, 2, 4]);
  });
  it("evenNumbersBelow(7) returns [0, 2, 4, 6]", function () {
    expect(evenNumbersBelow(7)).to.eql([0, 2, 4, 6]);
  });
  it("evenNumbersBelow(8) returns [0, 2, 4, 6]", function () {
    expect(evenNumbersBelow(8)).to.eql([0, 2, 4, 6]);
  });
});
