import { expect } from "chai";

import { genfib } from "./fibonacciGenerator";

describe("Runs the tests for fibonacciGenerator", () => {
  let fib = genfib();

  it("Runs the function the first time", () => {
    expect(fib()).to.eql(0);
  });
  it("Runs the function a second time", () => {
    expect(fib()).to.eql(1);
  });
  it("Runs the function a third time", () => {
    expect(fib()).to.eql(1);
  });
});
