export const removeSpace = string => {
  if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
  return string.replace(/\s/g, "");
};

export const reverse = string =>
  string
    .split("")
    .reverse()
    .join("");

/**********************************************
 * check if the two specified string are
 * permutation / Anagram to each other
 **********************************************/
export const isPermutation = (a, b) =>
  a.length === b.length &&
  a
    .split("")
    .sort()
    .join() ===
    b
      .split("")
      .sort()
      .join();

/**********************************************
 * Check if the string is a Palindrome
 **********************************************/
export const isPalindrome = str =>
  reverse(str.toLowerCase()) === str.toLowerCase();

/**********************************************
 * Check if two string are rotational
 **********************************************/
export const isRotational = (str1, str2) =>
  str1.length === str2.length && (str1 + str1).indexOf(str2) != -1;

/**********************************************
 * Capitalize the first letter of an word
 **********************************************/
export const capitalize = str =>
  str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);

/**********************************************
 * Returns the string with Camelcase of each word
 **********************************************/
export const camelCase = str => {
  let string = str
    .toLowerCase()
    .replace(/[^A-Za-z0-9]/g, " ")
    .split(" ")
    .reduce((result, word) => result + capitalize(word.toLowerCase()));
  return string.charAt(0).toLowerCase() + string.slice(1);
};

export const permute = (text, n = text.length) => {
  if (n <= 1) {
    console.log(text.join(""));
  } else {
    for (let i = 0; i < n; i++) {
      permute(text, n - 1);
      const j = n % 2 ? 0 : i;
      [text[n - 1], text[j]] = [text[j], text[n - 1]];
    }
  }
};
