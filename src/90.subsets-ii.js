/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const result = [];

  const subset = [];

  nums.sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
    return 0;
  });

  function backtrack(i) {
    if (i >= nums.length) {
      result.push([...subset]);
      return;
    }

    subset.push(nums[i]);
    backtrack(i + 1);
    subset.pop();

    let j = i;
    while (nums[j] === nums[i] && j < nums.length) {
      j++;
    }
    backtrack(j);
  }

  backtrack(0);

  return result;
};
// @lc code=end
