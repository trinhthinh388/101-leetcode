/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];

  function backtrack(curr, pos) {
    if (curr.length === k) {
      result.push([...curr]);
      return;
    }
    if (pos > n) return;

    for (let i = pos; i <= n; i++) {
      curr.push(i);
      backtrack(curr, i + 1);
      curr.pop();
    }
  }

  backtrack([], 1);

  return result;
};
// @lc code=end
