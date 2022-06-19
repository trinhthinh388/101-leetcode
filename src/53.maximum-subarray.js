/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/** sumArr
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = -Infinity;
  let currentMax = 0;
  nums.forEach((n) => {
    currentMax += n;
    max = Math.max(currentMax, max);
    currentMax = Math.max(currentMax, 0);
  });

  return max;
};
// @lc code=end
