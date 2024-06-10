/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const i = Math.floor((l + r) / 2);
    if (nums[i] === target) return i;
    else if (target < nums[i]) {
      r = i - 1;
    } else {
      l = i + 1;
    }
  }

  return -1;
};
// @lc code=end
