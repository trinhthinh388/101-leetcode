/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const mem = {};
  if (s[0] === '0') return 0;
  if (s.length === 2 && +s > 26) return 1;
  if (s.length === 2 && s[s.length - 1] === '0') return 1;

  function dfs(str, length) {
    const chars = str.slice(0, length);
    if (chars[0] === '0' || parseInt(chars, 10) > 26) return 0;
    if (str.length === 2 && parseInt(chars, 10) <= 26) return 1;
    if (str.length <= 1) return 1;
    if (mem[`${str}-${length}`]) return mem[`${str}-${length}`];

    const result = dfs(str.slice(length), 1) + dfs(str.slice(length), 2);
    mem[`${str}-${length}`] = result;
    return result;
  }
  return dfs(s, 1) + dfs(s, 2);
};
// @lc code=end
