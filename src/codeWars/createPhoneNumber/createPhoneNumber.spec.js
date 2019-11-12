import { expect } from "chai";
import createPhoneNumber from "./createPhoneNumber";

describe("Should run the tests for createPhoneNumber challenge", () => {
  it("Should run the first test", () => {
    let value = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    let result = "(123) 456-7890";
    expect(value).to.eql(result);
  });
});
