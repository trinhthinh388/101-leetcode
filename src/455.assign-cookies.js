/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let result = 0;
  for (let i = 0; i < g.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s[j] >= g[i]) result++;
    }
  }

  return result;
};
// @lc code=end
