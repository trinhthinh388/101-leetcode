/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const symbols = {
    1000: 'M',

    500: 'D',

    100: 'C',

    50: 'L',

    10: 'X',

    5: 'V',

    1: 'I',
  };

  let roman = '';

  Object.keys(symbols)
    .map((base) => parseInt(base, 10))
    .sort((a, b) => b - a)
    .forEach((base) => {
      const count = parseInt(num / base, 10);
      console.log(base, count);
      num -= count * base;
      for (let i = 0; i < count; i++) {
        roman += symbols[base];
      }
    });
  return roman;
};
// @lc code=end
