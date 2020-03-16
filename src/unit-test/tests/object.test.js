const { addPropertiesToObject } = require("../functions/object");

describe("Test addPropertiesToObject", () => {
  test("should return new object that contained new properties", () => {
    expect(addPropertiesToObject({ name: "Lmint" }, { age: 20 })).toEqual({
      name: "Lmint",
      age: 20
    });
  });

  test("should return null if root object is not existed", () => {
    expect(addPropertiesToObject(null, { age: 20 })).toBe(null);
  });

  test("should return null if root object is not be an object", () => {
    expect(addPropertiesToObject(1, { age: 20 })).toBe(null);
  });

  test("should return root object if second param is not an object", () => {
    expect(addPropertiesToObject({ name: "Lmint" }, 1)).toEqual({
      name: "Lmint"
    });
  });

  test("should return root object if second param is not falsy", () => {
    expect(addPropertiesToObject({ name: "Lmint" }, null)).toEqual({
      name: "Lmint"
    });
  });
});
