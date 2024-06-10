/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];

  /**
   *
   * @param {number} open number of open parentheses
   * @param {number} close number of close parentheses
   * @param {string} str generated parenthese
   */
  function run(open, close, str) {
    if (str.length === n * 2) {
      // All syntax has been used correctly
      res.push(str);
      return;
    }

    if (open) run(open - 1, close, str + '('); // By default, try to open a new parenthese
    /**
     * If no open parenthese are allowed to open (Have done tried to open all possible parenthese) then try to put new close parenthese.
     */
    if (open !== close) run(open, close - 1, str + ')');
  }

  run(n, n, '');

  return res;
};
// @lc code=end
