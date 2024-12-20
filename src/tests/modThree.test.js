const modThree = require("../utils/modThree");

describe("modThree", () => {
  it("should return 0 for input '110'", () => {
    expect(modThree("110")).toBe(0);
  });

  it("should return 1 for input '1010'", () => {
    expect(modThree("1010")).toBe(1);
  });

  it("should return 1 for input '1101'", () => {
    expect(modThree("1101")).toBe(1);
  });

  it("should return 2 for input '1110'", () => {
    expect(modThree("1110")).toBe(2);
  });

  it("should return 0 for input '1111'", () => {
    expect(modThree("1111")).toBe(0);
  });

  it("should throw an error for invalid input", () => {
    expect(() => modThree("invalid")).toThrow("Input must be a binary string (only 0s and 1s). Example: '1101'");
  });

  it("should throw an error for excessively long input", () => {
    const longInput = "1".repeat(1001);
    expect(() => modThree(longInput)).toThrow("Input string is too long. Maximum allowed length is 1000 characters.");
  });
});
