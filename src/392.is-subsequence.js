/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length > t.length) return false;
  if (s.length === 0) return true;
  let i = 0;
  let j = 0;
  while (j < t.length) {
    if (s[i] === t[j]) {
      if (i === s.length - 1) return true;
      i++;
    }
    j++;
  }

  return false;
};
// @lc code=end
