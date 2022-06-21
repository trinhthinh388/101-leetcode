/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates = candidates.sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
    return 0;
  });

  const result = [];

  function backtrack(curr, pos, soFar) {
    if (soFar === 0) {
      result.push([...curr]);
    }
    if (soFar < 0) {
      return;
    }

    prev = -1;
    for (let i = pos; i < candidates.length; i++) {
      if (candidates[i] === prev) continue;
      curr.push(candidates[i]);
      backtrack(curr, i + 1, soFar - candidates[i]);
      curr.pop();

      prev = candidates[i];
    }
  }

  backtrack([], 0, target);

  return result;
};
// @lc code=end
