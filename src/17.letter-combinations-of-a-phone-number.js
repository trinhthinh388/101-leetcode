/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const letters = [
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
  ];
  const result = [];
  if (!digits.length) return [];
  function backtrack(i, curStr) {
    if (curStr.length >= digits.length) {
      result.push(curStr);
      return;
    }

    for (let j = 0; j < letters[digits[i] - 1].length; j++) {
      backtrack(i + 1, curStr + letters[digits[i] - 1][j]);
    }
  }
  backtrack(0, '');
  return result;
};
// @lc code=end
