/*
 * @lc app=leetcode id=1647 lang=javascript
 *
 * [1647] Minimum Deletions to Make Character Frequencies Unique
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
  let freq = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    freq[s[i].charCodeAt(0) - 97] += 1;
  }

  let min = 0;
  freq = freq.filter((n) => n > 0).sort((a, b) => b - a);

  let i = 0;

  while (i < freq.length - 1) {
    if (freq[i] <= freq[i + 1]) {
      min += freq[i + 1] - Math.max(freq[i] - 1, 0);
      freq[i + 1] = freq[i] - 1;
    }
    i++;
  }

  return min;
};
// @lc code=end
