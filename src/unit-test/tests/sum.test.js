const { sumTwo } = require("../functions/number");

describe("Function sumTwo", () => {
  test("should return 5 if input is 2 and 3", () => {
    expect(sumTwo(2, 3)).toBe(5);
  });

  test("should return current parameter if input just have 01 parameter", () => {
    expect(sumTwo(1)).toBe(1);
    expect(sumTwo(null, 2)).toBe(2);
    expect(sumTwo(undefined, 3)).toBe(3);
  });
});
