/**********************************
 * ref: https://medium.freecodecamp.org/how-to-make-a-beautiful-tiny-npm-package-and-publish-it-2881d4307f78
 *********************************/

import { removeSpace, reverse } from "./string/index.js";
import { print, numberToWord } from "./common/index.js";

export const greetings = name => print(`Hello ${name}`);

console.log(numberToWord(123213));
