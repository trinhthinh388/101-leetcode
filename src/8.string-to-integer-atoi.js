/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  s = s.trim();
  const valid = '-+0123456789';
  if (!valid.includes(s[0])) return 0;
  if (s.length === 1 && (s[0] === '-' || s[0] === '+')) return 0;
  let digits = '';
  for (let i = 0; i < s.length; i++) {
    if (digits.length && !valid.includes(s[i])) break;
    if (valid.includes(s[i])) {
      digits += s[i];
    }
  }
  const num = parseFloat(digits);
  if (num < -2147483648) return -2147483648;
  else if (num >= 2147483648) return 2147483647;
  else if (isNaN(num)) return 0;
  return num;
};
// @lc code=end
