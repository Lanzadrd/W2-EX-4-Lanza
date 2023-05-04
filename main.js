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
  let divisors = [1, number];

  for (let i = 0; i < divisors.length; i++) {
    if (number % divisors[i] === 0);
    return true;
  }
};

export default {
  checkVocals,
  checkIfNumberIsEven,
  checkIfNumberIsPrime,
};
