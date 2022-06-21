/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  if (nums.length === 1) {
    return [[...nums]];
  }

  for (let i = 0; i < nums.length; i++) {
    const n = nums.shift();
    perms = permute(nums);

    perms.forEach((perm) => {
      perm.push(n);
      result.push([...perm]);
    });

    nums.push(n);
  }
  return result;
};
// @lc code=end
