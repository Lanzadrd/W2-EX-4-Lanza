const checkVocals = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.every((vowel) => word.includes(vowel));
};

const checkIfNumberIsEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
};

export default {
  checkVocals,
  checkIfNumberIsEven,
};
