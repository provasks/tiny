@provasks/tiny
npm (scoped) npm bundle size (minified)

Removes all spaces from a string.

Install
\$ npm install @provasks/tiny
Usage
const tiny = require("@provasks/tiny");

tiny("So much space!");
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
// at tiny (<anonymous>:2:41)
// at <anonymous>:1:1
