import yeah from "./main.js";

describe("Given a check vocals function", () => {
  describe("When it receives the word `murcielago`", () => {
    test("Then it should return true", () => {
      const word = "murcielago";
      const result = true;

      const expectedResult = yeah.checkVocals(word);

      expect(expectedResult).toBe(result);
    });
  });
});

describe("Given a check even number function", () => {
  describe("When it receives the number 8", () => {
    test("Then it should return true", () => {
      const number = 8;
      const result = true;

      const expectedResult = yeah.checkIfNumberIsEven(number);

      expect(expectedResult).toBe(result);
    });
  });
});

describe("Given a check even number function", () => {
  describe("When it receives the number 8", () => {
    test("Then it should return true", () => {
      const number = 8;
      const result = true;

      const expectedResult = yeah.checkIfNumberIsEven(number);

      expect(expectedResult).toBe(result);
    });
  });
});
