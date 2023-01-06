export const isStartsWithVowel = (str: string) => {
  const vowel = 'aeiouyAEIOUY';
  return vowel.includes(str[0]);
};
