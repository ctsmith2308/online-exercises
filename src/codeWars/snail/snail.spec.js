import { expect } from "chai";
import snail from "./snail";

describe("Should run the tests for snail challenge", () => {
  it("Should run the first test", () => {
    let testArr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    let value = snail(testArr);
    let result = [1, 2, 3, 6, 9, 8, 7, 4, 5];
    expect(value).to.eql(result);
  });
  it("Should run the second test", () => {
    let another = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25]
    ];
    let value = snail(another);
    let result = [
      1,
      2,
      3,
      4,
      5,
      10,
      15,
      20,
      25,
      24,
      23,
      22,
      21,
      16,
      11,
      6,
      7,
      8,
      9,
      14,
      19,
      18,
      17,
      12,
      13
    ];
    expect(value).to.eql(result);
  });
});
