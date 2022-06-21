/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

const { forEach } = require('lodash');

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = [];

  const perm = [];

  const count = nums.reduce((obj, n) => {
    obj[n] = (obj[n] || 0) + 1;
    return obj;
  }, {});

  function backtrack() {
    if (perm.length === nums.length) {
      result.push([...perm]);
      return;
    }
    Object.keys(count).forEach((n) => {
      if (count[n] > 0) {
        perm.push(n);
        count[n]--;
        backtrack();
        count[n]++;
        perm.pop();
      }
    });
  }

  backtrack();

  return result;
};
// @lc code=end
