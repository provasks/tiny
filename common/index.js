export const print = msg => console.log(msg);
export const numberToWord = number => {
  const NS = [
    { value: 1000000000000000000000, str: "sextillion" },
    { value: 1000000000000000000, str: "quintillion" },
    { value: 1000000000000000, str: "quadrillion" },
    { value: 1000000000000, str: "trillion" },
    { value: 1000000000, str: "billion" },
    { value: 1000000, str: "million" },
    { value: 1000, str: "thousand" },
    { value: 100, str: "hundred" },
    { value: 90, str: "ninety" },
    { value: 80, str: "eighty" },
    { value: 70, str: "seventy" },
    { value: 60, str: "sixty" },
    { value: 50, str: "fifty" },
    { value: 40, str: "forty" },
    { value: 30, str: "thirty" },
    { value: 20, str: "twenty" },
    { value: 19, str: "nineteen" },
    { value: 18, str: "eighteen" },
    { value: 17, str: "seventeen" },
    { value: 16, str: "sixteen" },
    { value: 15, str: "fifteen" },
    { value: 14, str: "fourteen" },
    { value: 13, str: "thirteen" },
    { value: 12, str: "twelve" },
    { value: 11, str: "eleven" },
    { value: 10, str: "ten" },
    { value: 9, str: "nine" },
    { value: 8, str: "eight" },
    { value: 7, str: "seven" },
    { value: 6, str: "six" },
    { value: 5, str: "five" },
    { value: 4, str: "four" },
    { value: 3, str: "three" },
    { value: 2, str: "two" },
    { value: 1, str: "one" }
  ];
  // debugger
  let result = "";
  for (let n of NS) {
    if (number >= n.value) {
      if (number <= 20) {
        result += n.str;
        number -= n.value;
        if (number > 0) result += " ";
      } else {
        let t = Math.floor(number / n.value);
        let d = number % n.value;
        if (d > 0) {
          return n.value.toString().length <= 2
            ? n.str + " " + numberToWord(d)
            : numberToWord(t) + " " + n.str + " " + numberToWord(d);
        } else {
          return numberToWord(t) + " " + n.str;
        }
      }
    }
  }
  //   debugger;
  return result;
};

/**********************************************
 * Swap two number
 **********************************************/
export const swap = (a, b) => {
  a = a + b - (b = a);
  console.log(`${a} ${b}`);
};

export let once = () => {
  console.log("fired");
  once = () => {};
};

export const errorHander = (
  message,
  source,
  lineNumber,
  colNumber,
  errorObject
) => {
  console.error(
    `ERROR: 
    Message: ${message} 
    Source: ${source} 
    Linenumber: ${lineNumber}
    Column Number: ${colNumber}
    Eroor Oboject: ${errorObject}`
  );
  return true;
};
