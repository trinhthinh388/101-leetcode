/*
 * @lc app=leetcode id=462 lang=javascript
 *
 * [462] Minimum Moves to Equal Array Elements II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  if (nums.length < 2) return 0;
  nums.sort((a, b) => a - b);
  let target = nums[~~(nums.length / 2)];
  let result = 0;
  nums.forEach((n) => {
    result += Math.abs(n - target);
  });
  return result;
};
// @lc code=end
