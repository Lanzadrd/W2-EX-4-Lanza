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

describe("Given a check prime number function", () => {
  describe("When it receives the number 11", () => {
    test("Then it should return true", () => {
      const number = 11;
      const result = true;

      const expectedResult = yeah.checkIfNumberIsPrime(number);

      expect(expectedResult).toBe(result);
    });
  });
});

describe("Given a check biggest number function", () => {
  describe("When it receives the number list [23, 31, 33, 45, 5, 21, 89, 28]", () => {
    test("Then it should return 89", () => {
      const numberList = [23, 31, 33, 45, 5, 21, 89, 28];
      const result = 89;

      const expectedResult = yeah.checkBiggestNumber(numberList);

      expect(expectedResult).toBe(result);
    });
  });
});

describe("Given a check biggest word function", () => {
  describe(`When it receives the word list ["jordan", "Yeezy", "Balenciagaga", "ConejoMalo", "Suprememe" ]`, () => {
    test(`Then it should return "Balenciagaga"`, () => {
      const wordList = [
        "jordan",
        "Yeezy",
        "Balenciagaga",
        "ConejoMalo",
        "Suprememe",
      ];
      const result = "Balenciagaga";

      const expectedResult = yeah.checkLargestWord(wordList);

      expect(expectedResult).toBe(result);
    });
  });
});
