/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let closestSum = Number.MAX_SAFE_INTEGER;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let ptr1 = i + 1,
      ptr2 = nums.length - 1;
    while (ptr1 < ptr2) {
      const sum = nums[i] + nums[ptr1] + nums[ptr2];
      if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
        closestSum = sum;
      }

      if (sum > target) {
        ptr2--;
      }

      // Else increment the first pointer
      // to get a larger sum
      else {
        ptr1++;
      }
    }
  }
  return closestSum;
};
// @lc code=end
