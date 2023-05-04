const checkVocals = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.every((vowel) => word.includes(vowel));
};

const checkIfNumberIsEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
};

const checkIfNumberIsPrime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
};

const checkBiggestNumber = (numberList) => {
  let currentBiggestNumber = 1;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > currentBiggestNumber) {
      currentBiggestNumber = numberList[i];
    }
  }
  return currentBiggestNumber;
};

export default {
  checkVocals,
  checkIfNumberIsEven,
  checkIfNumberIsPrime,
  checkBiggestNumber,
};
