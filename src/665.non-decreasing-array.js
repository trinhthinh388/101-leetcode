/*
 * @lc app=leetcode id=665 lang=javascript
 *
 * [665] Non-decreasing Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let available = true;
  if (nums.length < 2) return true;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] <= nums[i + 1]) continue;

    if (!available) return false;
    if (i === 0 || nums[i + 1] >= nums[i - 1]) {
      nums[i] = nums[i + 1];
    } else {
      nums[i + 1] = nums[i];
    }
    available = false;
  }
  return true;
};
// @lc code=end
