/*
 * @lc app=leetcode id=868 lang=javascript
 *
 * [868] Binary Gap
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  const binary = n.toString(2);
  let max = Number.MIN_VALUE;
  let i = binary.indexOf('1');
  let j = i + 1;
  while (j < binary.length) {
    if (binary[j] === '1') {
      max = Math.max(max, j - i);
      i = j;
    }

    j++;
  }
  return max;
};
// @lc code=end
