const chai = require("chai");
const expect = chai.expect;
const fns = require("../problems/03-highest-average");

describe("getAverage", function() {
  const getAverage = fns.getAverage;

  it("getAverage([1, 2, 3, 4, 5]) returns 3", function () {
    expect(getAverage([1, 2, 3, 4, 5])).to.eq(3);
  });
  it("getAverage([10000, -9998]) returns 1", function () {
    expect(getAverage([10000, -9998])).to.eq(1);
  });
  it("getAverage([2, 100, 55, 19]) returns 44", function () {
    expect(getAverage([2, 100, 55, 19])).to.eq(44);
  });
  it("getAverage([4, 8, 12]) returns 8", function () {
    expect(getAverage([4, 8, 12])).to.eq(8);
  });
});

describe("highestAverage - uses the getAverage function", function() {
  it("highestAverage([[1, 2, 3, 4, 5], [10000, -9998], [2, 100, 55, 19], [4, 8, 12]]) returns 2", function () {
    expect(
      fns.highestAverage([
        [1, 2, 3, 4, 5],
        [10000, -9998],
        [2, 100, 55, 19],
        [4, 8, 12],
      ])
    ).to.eq(2);
    const highestAverage = formatFile((arr) => {
      return arr[0] === 10000 ? 10 : 0;
    });
    expect(
      highestAverage([
        [1, 2, 3, 4, 5],
        [10000, -9998],
        [2, 100, 55, 19],
        [4, 8, 12],
      ]),
      "highestAverage must use the getAverage function"
    ).to.eq(1);
  });
  it("highestAverage([[1, 2, 3, 4, 5], [10000, -9998]]) returns 0", function () {
    expect(
      fns.highestAverage([
        [1, 2, 3, 4, 5],
        [10000, -9998],
      ])
    ).to.eq(0);
    const highestAverage = formatFile((arr) => {
      return arr[0] === 10000 ? 10 : 0;
    });
    expect(
      highestAverage([
        [1, 2, 3, 4, 5],
        [10000, -9998],
      ]),
      "highestAverage must use the getAverage function"
    ).to.eq(1);
  });
  it("highestAverage([[1, 2, 3, 4, 5], [4, 8, 12]]) returns 1", function () {
    expect(
      fns.highestAverage([
        [1, 2, 3, 4, 5],
        [4, 8, 12],
      ])
    ).to.eq(1);
    const highestAverage = formatFile((arr) => {
      return arr[0] === 1 ? 10 : 0;
    });
    expect(
      highestAverage([
        [1, 2, 3, 4, 5],
        [4, 8, 12],
      ]),
      "highestAverage must use the getAverage function"
    ).to.eq(0);
  });
});

function formatFile (cb) {
  const fs = require('fs');
  const path = require('path');
  const args = [
    /(function\s+getAverage\s*\()|((?<=\n\s*)(const|let|var)?\s*getAverage\s*=\s*function\s*\()|((?<=\n\s*)(const|let|var)?\s*getAverage\s*=\s*\((?=.*=>))/g,
    "exports.getAverage = function (",
    /=>/g,
    "",
    /(?<!function\s*)getAverage\s*\(/g,
    "exports.getAverage(",
    "module.exports = {\n  getAverage,\n",
    "module.exports = {\n",
  ];

  if (!args.length) return require("../problems/03-highest-average");
  let file = fs.readFileSync(
    path.resolve(__dirname, "../problems/03-highest-average.js"),
    "utf-8"
  );
  let i = 0;
  while (i < args.length) {
    let [regex, replaceStr] = [args[i], args[i + 1]];
    file = file.replace(
      regex,
      replaceStr
    );
    i += 2;
  }
  file += "exports.getAverage = " + cb.toString();
  const Module = module.constructor;
  const m = new Module();
  m._compile(file, "");
  const obj = m.exports;
  return obj.highestAverage;
};
